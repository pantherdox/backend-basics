const http = require('http');
http.createServer((req, res) => {
    if(req.url === "/users"){
        res.end("Users logic")
    }
    if(req.url === "/products"){
        res.end("Products logic")
    }
    if(req.url === "/orders"){
        res.end("Orders logic")
    }
}).listen(5051)