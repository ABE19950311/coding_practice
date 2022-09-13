import Link from "next/link"
import {useState,useEffect} from "react";

const Testlink = ()=>{
    const [te,setTe] = useState("");
    const [kekka,setKekka] = useState("");
    const [aite,setAite] = useState("");

    useEffect(()=>{
        const janke = ["グー","チョキ","パー"];
        const aitenote = Math.floor(Math.random()*janke.length);
        setAite(janke[aitenote]);
    },[])

    console.log(aite);

    const doClick = (event:any)=>{
        setTe(event.target.value);
    }

    const doSubmit = (event:any)=>{
        event.preventDefault();
        if(te==="グー"&&aite==="グー") {
            setKekka("あいこ")
        }else  if(te==="グー"&&aite==="チョキ") {
            setKekka("かち")
        }else  if(te==="グー"&&aite==="パー") {
            setKekka("まけ")
        }else  if(te==="チョキ"&&aite==="グー") {
            setKekka("まけ")
        }else  if(te==="チョキ"&&aite==="チョキ") {
            setKekka("あいこ")
        }else  if(te==="チョキ"&&aite==="パー") {
            setKekka("かち")
        }else  if(te==="パー"&&aite==="グー") {
            setKekka("かち")
        }else  if(te==="パー"&&aite==="チョキ") {
            setKekka("まけ")
        }else  if(te==="パー"&&aite==="パー") {
            setKekka("あいこ")
        }
    }

    return (
        <div>   
            <Link href="../components/App">
            <a>戻るよ！！</a>
            </Link>
            <p>ジャンケン</p>
            <form onSubmit={doSubmit}>
                <input type="radio" onClick={doClick} name="janken" value="グー"/>グー
                <input type="radio" onClick={doClick} name="janken" value="チョキ"/>チョキ
                <input type="radio" onClick={doClick} name="janken" value="パー"/>パー
                <input type="submit" />
            </form>
            <h1>結果{kekka}</h1>
        </div>
    )
}

export default Testlink