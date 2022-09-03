import {useState,useEffect} from "react";
import {usePersist} from "./Persist";

export const Calc = ()=> {
    const [message,setMessage] = useState("");
    const [input,setInput] = useState("");
    const [data,setData] = usePersist("calc-history",[]);
    const [func,setFunc] = useState({func:{}});

    const fetchFunc = (address:string):any=>{
        fetch(address)
        .then(res=>{
            return res.json();
        });
    }

    useEffect(()=>{
        fetchFunc("/api/func")
        .then((r:any)=>{
            setFunc(r);
        })
    },[data]);

    const onChange = (event:{target:HTMLInputElement})=>{
        setInput(event.target.value);
    }
    const onKeyPress = (event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key=="Enter") {
            doAction();
        }
    }
    const doAction = ()=>{
        const res = eval(input);
        setMessage(res);
        data.unshift(`${input}+=${res}`);
        setData(data);
        setInput("");
    }

    const clear = ()=>{
        setData([]);
        setMessage("Clear histo");
    }

    const doFunc = (event:React.MouseEvent<HTMLButtonElement>)=>{
        const arr = input.split(",");
        const fid = event.target.id;
        const f = func.func[fid];
        const fe = eval(f.function);
        const res = fe(arr);
        setMessage(res);
        data.unshift(`${fid}=${res}`);
        setData(data);
        setInput("");
    }

    return (
        <div>
            <h5>Result:{message}</h5>
            <div>
                <input type="text" value={input} onChange={onChange} onKeyPress={onKeyPress}/>
            </div>
            {Object.entries(func.func).map((value,key)=>{
                return (
                    <button key={key} title={value[1].caption} id={value[0]} onClick={doFunc}>{value[0]}</button>
                )
            })}

            <table>
                <thead><tr><th>History:</th></tr></thead>
                <tbody>
                    {data.map((value:string,key:number)=>{
                      return (
                        <tr key={key}>
                            <td>{value}</td>
                        </tr>
                      )  
                    })}
                </tbody>
            </table>
            <button onClick={clear}>clear hos</button>
        </div>
    )

}