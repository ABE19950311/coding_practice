import dragula from "dragula";
import {status,Status} from "./create";


export class Drug {
    todo
    doing
    done
    newState:Status=status.todo;

    constructor(todo:HTMLElement,doing:HTMLElement,done:HTMLElement) {
        this.todo = todo;
        this.doing = doing;
        this.done = done;
    }
    
    Drugdrop(renew:(el:string,newState:Status)=> void) {
        dragula([this.todo,this.doing,this.done]).on("drop",(el,target,_source,_sibling)=>{
           if(target.id==="doingList") this.newState = status.doing;
           if(target.id==="doneList") this.newState = status.done;
           renew(el.id,this.newState);
        });
    }
}