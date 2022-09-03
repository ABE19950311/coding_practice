import { Status,Create } from "./create";
import { Storage } from "./storage";


export class Data {
     private storage = new Storage();
     list:Create[] = [];

    save(data:Create) {
        this.list.push(data);
        this.storage.updatestorage(this.list);
    }

    datafind(id:string) {
     return this.list.find((data)=>data.id===id);
    }

    filter() {
        console.log(this.list);
        return this.list.filter((item)=>item.status==="DONE");
    }

    update(data:Create,newState:Status) {
        this.list.map((item)=>{
            if(item.id===data.id) return item.status=newState;
                return item;
        });
        this.storage.updatestorage(this.list);
        console.log(this.storage);
    }

    delete(id:string) {
        this.list = this.list.filter((item)=>item.id!==id);
        this.storage.updatestorage(this.list);
    }

}