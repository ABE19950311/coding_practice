import axios from "axios";
import React, {useState,useEffect} from "react";
import Link from "next/link";

type test = {
        id:number,
        name:string,
        is_completed:boolean
}

export const Getjson= ()=>{
    const [input,setInput] = useState("");
    const [data,setData] = useState([]);
    const [up,setUp] = useState("");
    const [search,setSearch] = useState("");

        useEffect(()=>{
            try {
                axios.get(process.env.NEXT_PUBLIC_ADDRESS as string)
                .then((res)=>{
                    setData(res.data);
                    return res.data;
                })}catch(error) {
                    console.log(error);
                }
        },[up])

        console.log(data);

　　　　　const onChange = (event:{target:HTMLInputElement})=>{
            setInput(event.target.value);     
        }

        const onSearch = (event:{target:HTMLInputElement})=>{
            setSearch(event.target.value);
        }


        const onSubmit = (event:React.MouseEvent<HTMLFormElement>)=>{
            event.preventDefault();
            if(input.trim()!=="") {
            try {
            axios.post(process.env.NEXT_PUBLIC_ADDRESS as string,{
                name:input
            },{headers:{"Content-Type":"application/json"}})
            .then((res)=>{
                setUp(res.data);
                return res.data
            })}catch(error) {
                console.log(error);
            }
        }
        }

        console.log(`1${"es"}`)

        const onDelete = (id:number)=>{
            try {
                axios.delete(process.env.NEXT_PUBLIC_ADDRESS+`/${id}`)
                .then((res)=>{
                    setUp(res.data);
                    return res.data
                })
            }catch(error) {
                console.log(error);
            }
        }

        const alldelete = ()=>{
            try {
                axios.delete(process.env.NEXT_PUBLIC_ALLDEL as string)
                .then((res)=>{
                setUp(res.data);
                return res.data
            })
            }catch(error) {
                return console.log(error);
            }
        }
    
        return (
            <div>
                <h1>Helloooo!!!!!</h1>
                <h3>todolist_example</h3>
                <Link href="../link/linktest">
                    <a>別リンク</a>
                </Link>
                <form　onSubmit={onSubmit}>
                    <input type="text" onChange={onChange}/>
                    <input type="submit" value="追加"/>
                </form>

                <label>検索：</label><input type="text" onChange={onSearch}/>
                <button　onClick={alldelete}>全削除</button>
            
                {data.filter((value:test)=>{
                    if(search===""){
                        return value
                    }else if(value.name.includes(search)){
                        return value
                    }
                }).map((value:test,key:number)=>{
                    return (
                        <p key={key}>
                            {value.name} <button onClick={()=>onDelete(value.id)}>削除</button>
                        </p>
                    )
                })
                }
            </div>
        )
}

export default Getjson


