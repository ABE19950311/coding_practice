window.addEventListener("load",()=>{
    main()
})

function main() {
    const url = "http://localhost:3000/getTodo"
    requestToServer(url,"POST",null,(data)=>{
        const div = document.getElementById("todolist");
        const ul = document.createElement("ul")
        data.todos.forEach((value)=>{
            const li = document.createElement("li")
            const delButton = document.createElement("button")
            const updButton = document.createElement("button")
            delButton.textContent = "削除"
            delButton.setAttribute("onclick",`deleteTodo({todo:"${value.todo}"})`)
            updButton.textContent = "アップデート"
            updButton.setAttribute("onclick",`updateTodo("${value.todo}")`)
            li.textContent = value.todo
            li.appendChild(delButton)
            li.appendChild(updButton)
            ul.appendChild(li)
        })
        div.appendChild(ul)
    })
}

function setTodo() {
    const url = "http://localhost:3000/setTodo"
    const body = {
        "todovalue":document.getElementById("todo").value
    }
    requestToServer(url,"POST",body,()=>{})
}

function deleteTodo(del) {
    const url = "http://localhost:3000/deleteTodo"
    const body = {
        filter:del
    }
    requestToServer(url,"POST",body,()=>{})
}

function updateTodo(upd) {
    const obj = document.getElementById("update")
    const btn = document.getElementById("updbtn")
    btn.setAttribute("onclick",`doUpdateTodo(
        {todo:"${upd}"},
        {todo:"${obj.value}"}
    )`)
}

function doUpdateTodo(filter,obj) {
    const url = "http://localhost:3000/updateTodo"
    const body = {
        filter:filter,
        obj:obj
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