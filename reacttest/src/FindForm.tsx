import {useState} from "react";
import { usePersist } from "./Persist";

export const FindForm = ()=>{
    const [memo,_setMemo] = usePersist("memo",[]);
    const [_fmemo,setFMemo] = usePersist("findmemo",[]);
    const [_mode,setMode] = usePersist("mode",[]);
    const [message,setMessage] = useState("");


    const onChange = (event:{target:HTMLInputElement})=>{
        setMessage(event.target.value);
    }

    const onSubmit = ()=>{
        if(message==="") {
            setMode("find");
        }
        let res = memo.filter((value:any)=>{
            return value.message.includes(message);
        });
        if(!res) return;
            setFMemo(res);
            setMessage("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}/>
                <input type="submit" value="Find"/>
            </form>
        </div>
    )

}