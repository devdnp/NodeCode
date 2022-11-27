const http = require("http");
const url  = require("url");

//url.parse()

http.createServer((req,res)=>{
    console.log(req.url);
    const urlObj = url.parse(req.url, true); //pass true for query object
    console.log(urlObj);

    console.log(urlObj.query.keywords);
    //we can use any number of queries and use the '&' to fetch multiple values of queries
}).listen(6263);

//the url object is returned containing many details of url
//pathname : specifies path in url
//query : with the '?' defined in url