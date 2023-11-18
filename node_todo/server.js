const http = require("http")
const fs = require("fs")
const mongoClient = require("mongodb").MongoClient;

let server

let todos = []
module.exports = todos

const RESPONSE_HEADER = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

const MONGO_DB_END_POINT = "mongodb://localhost:27017";
const MONGO_DB_DB_NAME = "todoDb"
const MONGO_DB_COLLECTIONS = {
    TODO:"todoCollection"
}

function router(url,request,response) {
    switch(url) {
        case "/":
            getPage(url,request,response)
            return;
        case "/index.css":
            getPage(url,request,response)
            return;
        case "/index.js":
            getPage(url,request,response)
            return;
        case "/setTodo":
            setTodo(url,request,response)
            return;
        case "/getTodo":
            getTodo(url,request,response)
            return;
    }
}

function getPage(url,request,response) {
    if(url=="/") {
        url = "/dest/index.html"
    }
    const currentDir = process.cwd();
    const path = url.split(".").pop()
    let header = {
        html:"text/html",
        css:"text/css",
        js:"text/javascript"
    }
    fs.readFile(`${currentDir}${url}`,"utf-8",(error,data)=>{
        if(!error) {
            response.writeHead(200, { "Content-Type": header[path]});
            response.write(data)
            response.end();
        }
    })
}

async function setTodo(url,request,response) {
    await dbInsert(MONGO_DB_COLLECTIONS.TODO,{
        todo:request.todovalue
    })
    const responseBody = {
        applicationStatusCode: "Success",
        applicationMessage: "Success"
    }
    doResponse(response,200,RESPONSE_HEADER,responseBody)
}

async function getTodo(url,request,response) {
    const res = await dbGet(MONGO_DB_COLLECTIONS.TODO)
    const responseBody = {
        applicationStatusCode: "Success",
        applicationMessage: "Success",
        todos:res
    }
    todos = res
    doResponse(response,200,RESPONSE_HEADER,responseBody)
}

async function dbInsert(collection,obj) {
    const res = await db.collection(collection).insertOne(obj)
    return res
}

async function dbGet(collection) {
    const res = await db.collection(collection).find().toArray()
    return res
}

async function dbUpdate(collection) {

}

async function dbDelete(collection,key) {
    const res = await db.collection(collection).deleteOne(key)
    return res
}

function doResponse(response,statuscode,responseHeader,responseBody) {
    console.log(responseBody)
    response.writeHead(statuscode,responseHeader)
    response.end(JSON.stringify(responseBody)+"\n")
}

async function main() {
    db = (await mongoClient.connect(MONGO_DB_END_POINT)).db(MONGO_DB_DB_NAME)
    server = http.createServer(
        async (request,response) => {
            let rawData = ""
            request.on("data",(chuck)=>{
                rawData += chuck
            })
            request.on("end",async()=>{
                if(rawData=="") {
                    rawData = "{}"
                }
                const requestBody = JSON.parse(rawData)
                try {
                    router(request.url,requestBody,response)
                } catch {

                }
            })
        }
    )
    server.listen(3000,async()=>{
        console.log("server listen 3000")
    })
}

main()