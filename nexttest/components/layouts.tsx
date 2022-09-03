import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {Header} from "./header";
import {Footer} from "./footer";

export const Layout = (props:{header:string,title:string,children:any})=>{
    return(
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header header={props.header} />
            <div>
            <h3>{props.title}</h3>
            {props.children}
            </div>
            <Footer footer="copyright SYODA-tunayo" />
        </div>
    )
}
