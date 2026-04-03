const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html");

    if(req.url === "/home") {
        res.write("<h1>Welcome home</h1>");
    } else if(req.url === "/about"){
        res.write("<h1>Welcome to About Us");
    } else if(req.url === "/node") {
        res.write("<h1>Welcome to my Node Js project</h1>");
    } else if(req.url === "/" || req.url === "/pizza") {
        res.write("<h1>This is your pizza</h1>")
    } else {
        res.write("<h1>Page Not Found</h1>");
    }

    res.end();
})

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})