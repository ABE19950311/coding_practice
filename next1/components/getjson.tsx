import {useState,useEffect, SetStateAction} from "react";
import useSWR from "swr";

type re = {
    zentai:{
        test1:{
            pro1:{name:string,age:number},
            pro2:{name:string,age:number}
        },
        test2:{
            pro1:{name:string,age:number},
            pro2:{name:string,age:number}
        }
    }
}


export const Getjson = ()=>{
    const [data,setData] = useState({zentai:{
        test1:{
            pro1:{name:"",age:0},
            pro2:{name:"",age:0}
        },
        test2:{
            pro1:{name:"",age:0},
            pro2:{name:"",age:0}
        }
    }});

    useEffect(()=>{
        fetch("/api/hello")
        .then((res:Response)=>{
            return res.json();
        })
        .then((res:re)=>{
            return setData(res); 
        })
    },[]);


    if(!data) return <div>loading now</div>

    return (
        <div>
           <p>{data.zentai.test1.pro1.name}</p>
           <p>{data.zentai.test2.pro2.name}</p>
        </div>
    )

}