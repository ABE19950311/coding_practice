import { Create, Status , status } from "./create";

export type TaskObject = {
    id:string,
    value:string,
    status:Status;
}

export class Storage {
    list:Create[] = [];
    storage

    constructor() {
        this.storage = localStorage;
    }

     updatestorage(list:Create[]) {
        this.storage.setItem("STORAGE",JSON.stringify(list));
        console.log(this.storage);
    }

    getstorage() {
        const json = JSON.parse(this.storage.getItem("STORAGE"));
        if(!json) return;
        assertIsTaskObjects(json);
        return json;
    }

     static validate(value:any) {
        if(!value) return false;
        if(!value.id) return false;
        if(!value.value) return false;
       if(!Object.values(status).includes(value.status)) return false;
        return true;
    }

}


function assertIsTaskObjects(values:any):asserts values is TaskObject[] {
    if(!Array.isArray(values)||!values.every((item)=>Storage.validate(item))) {
        throw new Error("エラー");
    }
}

