const http = require("http")
const fs = require("fs")
const mongoClient = require("mongodb").MongoClient;

let server

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
    console.log(url)
    switch(url) {
        case "/":
            getPage(url,request,response)
            return;
    }
}

function getPage(url,request,response) {
    
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