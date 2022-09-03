import {useState} from "react";

export const usePersist = (ky:string,initVal:any)=> {
    const key = "hookss:"+ky;
    const value = ()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initVal
        }catch(err) {
            console.log("err");
            return initVal;
        }
    }

    const setValue = (val:any)=>{
        try {
            setSavedValue(val);
            window.localStorage.setItem(key,JSON.stringify(val));
        }catch(err) {
            console.log("err");
        }
    }

    const [savedValue,setSavedValue] = useState(value);
    return [savedValue,setValue] as const;
}