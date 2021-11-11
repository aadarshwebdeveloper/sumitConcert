const http = require("http");

const server = http.createServer((req, res)=>{
    res.end("server has been started")
},5500)

server.listen(5500, "127.0.0.1", ()=>{
    console.log("server is listening");
})