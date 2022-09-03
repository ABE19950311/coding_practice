import { usePersist } from "./Persist";
import {Item} from "./Item";

export const Memo = ()=>{
  const [memo,_setMemo] = usePersist("memo",[]);
  const [fmemo,_setFMemo] = usePersist("findmemo",[]);
  const [mode,_setMode] = usePersist("mode","default");

    let data=[];

    switch(mode) {
        case "default":
        data = memo.map((item:any,index:number)=>{
            return (
            <Item key={item.message} value={item} index={index+1} />
            )
        });
        break;

        case "find":
            data=fmemo.map((item:any,index:number)=>{
                return (
                <Item key={item.message} value={item} index={index+1} />
                )
            });
            break;
        
        default:
            data=memo.map((item:any,index:number)=>{
                return (
                <Item key={item.message} value={item} index={index+1} />
                )
            });
    }
 
  return (
   <table>
    <tbody>
        {data}
    </tbody>
   </table>
  )
}