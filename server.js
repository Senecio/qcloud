
/*var AV = require('leanengine');
AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'KbDLPWwEVNtxnGYQn6XmkJF6-9Nh9j0Va',
  appKey: process.env.LEANCLOUD_APP_KEY || 'Y0Ma4uJYsgHBX7uQBMMby5sp',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'pwpLDmVHzBGdihDpME24yEX8'
});*/

var os = require('os');  
var IPv4,hostName;
var cpu = os.cpus();
var platform = os.platform();
hostName=os.hostname();
for(var i=0;i<os.networkInterfaces().eth0.length;i++){  
    if(os.networkInterfaces().eth0[i].family=='IPv4'){  
        IPv4=os.networkInterfaces().eth0[i].address;  
    }  
}

console.log(cpu);
console.log(os.networkInterfaces());


var http = require("http");
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write(hostName);
    response.write(platform);
    response.write(IPv4);
    response.end();
}).listen(process.env.LEANCLOUD_APP_PORT);
console.log("nodejs start listen process.env.LEANCLOUD_APP_PORT port!");