import { usePersist } from "./Persist";
import {Memo} from "./Memo";
import {AddForm} from "./AddForm";
import {FindForm} from "./FindForm";
import { DelForm } from "./DelForm";
 
export const MemoPage = ()=>{
    const [mode,_setMode] = usePersist("mode","default");

    return (
        <div>
            <h5>Memo(mode:{mode})</h5>
            <AddForm />
            <FindForm />
            <DelForm />
            <div>
                <Memo />
            </div>
        </div>
    )
}