import { v4 as uuid } from "uuid";

export const status = {
    todo:"TODO",
    doing:"DOING",
    done:"DONE"
} as const;


export type Status = typeof status[keyof typeof status]


export class Create {
    id = uuid();
    value:string|""="";
    status:Status|""="";

        constructor(value:string,id?:string,newstate?:Status) {
            this.id=id||uuid();
            this.value=value;
            this.status=newstate||status.todo;
            console.log(this.value);
            console.log(this.id);
            console.log(this.status);
        }
}