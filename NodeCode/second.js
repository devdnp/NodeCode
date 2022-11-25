//http module
const http = require('http');

//const server = http.createServer()
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>We can include the html here</h1>');
    res.write('<h3>any number of html code can be written here</h3>');
    res.write('<button>click me</button>');
    res.end('the response process end');
});     //.listen(6262);

server.listen(6262);