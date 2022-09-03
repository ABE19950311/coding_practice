import {useState} from "react";
import { usePersist } from "./Persist";

export const DelForm = ()=>{
  const [memo,setMemo] = usePersist("memo",[]);
  const [num,setNum] = useState(0);

  let res:string[] = memo.map((value:any,index:number)=>{
    return (
        <option key={index} value={index}>{value.message}</option>
    )
  });

  const onChange = (event:{target:HTMLSelectElement})=>{
    let n:number = Number(event.target.value);
    setNum(n);
  }



  const onSubmit = ()=>{
    let del = memo.filter((_value:any,index:number)=>{
        return num!=index;
    });
    setMemo(del);
    setNum(0);
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <select onChange={onChange} defaultValue="-1">{res}</select>
            <input type="submit" value="Del"/>
        </form>
    </div>
  )

}