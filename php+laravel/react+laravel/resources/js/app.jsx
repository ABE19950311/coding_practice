import "./bootstrap";
import ReactDOM from "react-dom/client";
import {useState} from "react";

function App() {
    const [test,setTest] = useState(0);

    const doCount =()=>{
        setTest((test)=>test+1);
    }

    return (
        <div>
        <h1>hello!!</h1>
        <button type="submit" onClick={doCount}>クリック</button>
        <span>{test}</span>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);