import {Heade} from "./head";
import {Header} from "./header";
import {Footer} from "./footer";

export const Layout = (props:{title:string,children:any})=>{
    return (
        <div>
        <Heade />
        <div>
            <Header title={props.title}/>
        </div>
            {props.children}
        <div>
            <Footer />
        </div>
        </div>
    )
}