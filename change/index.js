const button = document.getElementById("button");
const span = document.getElementById("span");


button.addEventListener("click",()=>{
    let total = 1;
    console.log(span.innerText);
    let now = span.innerText ? Number(span.innerText):0;
    console.log(now);
    total += now;
    console.log(total);
    span.innerText = total;
});