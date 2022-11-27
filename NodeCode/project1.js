const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{

    const path = req.url;

    if(path=="/"){
        console.log("Home Page")

        res.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContent = fs.readFileSync("./views/home.html")
        res.write(fileContent);
        res.end();
    }
    else if(path=="/about"){
        console.log("About Page")
        res.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContent = fs.readFileSync("./views/about.html")
        res.write(fileContent);
        res.end();
    }
    else if(path=="/services"){
        console.log("Services Page")

        res.writeHead(200,{
            'content-type':'text/html'
        })

        const fileContent = fs.readFileSync("./views/services.html")
        res.write(fileContent);
        res.end();
    }

}).listen(6264);