import type {ApiContext,User} from "types/data";
import {fetcher} from "utils";

export type GetUserParams = {
    id:number
}

const getUser = async (
    context:ApiContext,
    {id}:GetUserParams
):Promise<User>=>{
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g,"")}/Users/${id}`,
        {
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
        },
    )
}

export default getUser