export default {
    "func":{
        "tax":{
            "caption":"入力した金額から消費税１０％パワー！！",
            "function":"(...param)=>{return Math.floor(param[0]*1.1)}"
        },
        "tax2":{
            "caption":"入力した金額から消費税8％パワー！！",
            "function":"(...param)=>{return Math.floor(param[0]*1.08)}"
        },
        "total":{
            "caption":"10,20,30....とーいうようにカンマで区切った数字の合計だす",
            "function":`(...param)=>{
                let re=0;
                for(let i in param) {
                    re += param[i]*1
                }
                return re
            }`
        },
    "factorial":{
        "caption":"ゼロから入力値までの合計",
        "function":`(...param)=>{
            let re = 0;
            for(let i=0;i<=param[0];i++) {
                re += i
            }
            return re
        }`
    },
    }
}
