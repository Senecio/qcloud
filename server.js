var http = require("http");
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"});  
    response.write("Hello World");  
    response.end();
}).listen(process.env.LEANCLOUD_APP_PORT);
console.log("nodejs start listen process.env.LEANCLOUD_APP_PORT port!");