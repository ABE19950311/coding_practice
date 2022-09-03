import {useState} from "react";
import { usePersist } from "./Persist";

export const AddForm = ()=>{
  const [memo,setMemo] = usePersist("memo",[]);
  const [message,setMessage] = useState("");
  const [_mode,setMode] = usePersist("mode","default");


  const onChange = (event:{target:HTMLInputElement})=>{
    setMessage(event.target.value);
  }

  const onAction = ()=>{
    let res = {
        message:message,
        created:new Date()
    }
    setMode("default");
    if(res.message==="") return
    memo.unshift(res);
    setMemo(memo);
    setMessage("");
  }

  return (
    <div>
        <form onSubmit={onAction}>
            <input type="text" onChange={onChange}/>
            <input type="submit" value="Add"/>
        </form>
    </div>
  ) 

}