import Link from "next/link"

const Testlink = ()=>{
    return (
        <div>   
            <Link href="../components/App">
            <a>戻るよ！！</a>
            </Link>
            <h1>ログイン</h1>
            <form>
                <label>ID:</label><input type="text" /><br></br>
                <label>パスワード:</label><input type="text" />
            </form>
        </div>
    )
}

export default Testlink