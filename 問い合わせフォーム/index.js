const mail_form = document.getElementById("form");
const mail_input = document.getElementById("input");
const mail_submit = document.getElementById("submit");

mail_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    hantei();
});


function hantei(){
    const judge = mail_input.value;
    if(judge.trim()){
        alert("mailOKです！！");
    }else{
        alert("mail入れてね！！！！");
    }
}