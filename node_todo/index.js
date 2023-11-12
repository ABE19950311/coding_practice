let todos = {
    todoValue
}

window.addEventListener("load",()=>{
    main()
})

function main() {
    
}

function setTodo() {
    const value = document.getElementById("todo").value
    requestTodo(value)
}

function requestTodo(todo) {
    let url = "http://localhost:3000/setTodo"
    let option = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "todovalue":todo
        })
    }
    fetch(url,option)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.error(e)
        })
}