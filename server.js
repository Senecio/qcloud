
/*var AV = require('leanengine');
AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'KbDLPWwEVNtxnGYQn6XmkJF6-9Nh9j0Va',
  appKey: process.env.LEANCLOUD_APP_KEY || 'Y0Ma4uJYsgHBX7uQBMMby5sp',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'pwpLDmVHzBGdihDpME24yEX8'
});*/

var os = require('os');  

var hostName=os.hostname();
var cpu = os.cpus();
var platform = os.platform();

console.log(hostName);
console.log(cpu);
console.log(platform);
console.log(os.networkInterfaces());


var http = require("http");
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("hello world.");
    response.end();
}).listen(process.env.LEANCLOUD_APP_PORT);
console.log("nodejs start listen process.env.LEANCLOUD_APP_PORT port!");