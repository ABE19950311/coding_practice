window.addEventListener("load",()=>{
    main()
})

function main() {
    const url = "http://localhost:3000/getTodo"
    requestToServer(url,"POST",null,(data)=>{

    })
}

function setTodo() {
    const url = "http://localhost:3000/setTodo"
    const body = {
        "todovalue":document.getElementById("todo").value
    }
    requestToServer(url,"POST",body,()=>{})
}

function requestToServer(url,method,body,callback) {
    const option = {
        method: method,
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    }
    fetch(url,option)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            callback(data)
        })
        .catch(e => {
            console.error(e)
        })
}