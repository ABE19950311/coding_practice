import useSWR from "swr";
import axios, { AxiosResponse } from "axios";

type testdata = {
    title:string,
}

export const Getjson= ()=>{
    const fetcher = (url:string)=>{
        return  fetch(url).then((res)=>res.json());
    }

    const {data,error} = useSWR("http://localhost:5000/issues",fetcher);

    
    if(error) return <div>error</div>
    if(!data) return <div>lodaing now</div>

    console.log(data);
    
    return (
        <div>
            <table>
                <tbody>
                    {data.channel.item.map((value:testdata,key:number)=>{
                        return (
                            <tr key={key}>
                                <td>{value.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}