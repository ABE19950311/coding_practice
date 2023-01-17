//"use strict"; 一番先頭に記入することで通常エラーにならないコードをエラーさせる

//要素はforeach以外にもfor inで処理させることも可能
//let youso = {
//    name:"tako",
//    age:11111,
//    syumi:"takodesu"
//}
//for(let key in youso){
//    console.log(`${key}+${youso[key]}`);
//}

//
//const dd = new Date();//現在日時を生成
//document.write(dd.toLocaleString());//toLocaalString() 言語に合わせた日時の文字列を返す

//window.onload = function() {   //onload ページ・画像読み込みが完了した時点でイベント実行（自動的に処理を実行させる）
//    setInterval(function() {  //setInterval 一定間隔で関数呼び出し
//        let dd = new Date();
//        document.getElementById("T1").innerHTML = dd.toLocaleString(); innerHTMLを更新させることで表記が増えないようにしてる
//    }, 1000);
//}    

//document.getElementById("button1").onclick = function(){
//    alert("hellooooooo!!!");
//} 

//window.addEventListener("load",()=>{
//    alert("hellooooooo!!!");
//});
//window.addEventListener("load",()=>{
//    alert("hellooooooo????");
//}); addEventListerを使えばonclick等と比べて複数処理できる

//removeEventListener(); addEventListnerで登録したイベントハンドラを削除する

//.trim() 前後の空白を取り除いた文字列を返す 

//a = "23:59:59".split(":");
//console.log(a[0] + "時" + a[1] + "分" + a[2] + "秒");
//split 指定した文字で区切る

//"ABC".concat("DEF", "EFG");   
//concat 文字列連結させる


//let str = '{"width":160, "height":120}';
//let obj = JSON.parse(str);
//console.log(obj);
//let str2 = JSON.stringify(obj);


// let n = 1000021
// let s = String(n)
// let split = s.split("")
// console.log(s.split(""))


// for(let i=0;i<split.length;i++) {
//     let test = split.length-1
//             console.log(split[i])
//             console.log(split[test-i])

// }
// for(let i=0;i<=25000;i++) {
//     console.log(i*i)
// }

// let d = []
// for(let i=1;i<=80000;i++) {
//     let data = `${i}SHEEP`
//     d.push(data)
// }
// let a = d.join("")
// console.log(a.substr(77776,20))


const fun = document.getElementById("fun")
const byou = document.getElementById("byou")
const miri = document.getElementById("miri")

window.addEventListener("load",()=>{
    let time = 180

    const timer =setInterval(()=>{
        if(time!==0) {
        time--;
        fun.textContent= Math.floor(time/60)
        byou.textContent = time%60
    }else if(time==0) {
        fun.textContent = "ラーメンできたよ！！！"
        byou.textContent = ""
        clearInterval(timer)
    }
    },1000)
})