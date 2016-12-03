
/*var AV = require('leanengine');
AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'KbDLPWwEVNtxnGYQn6XmkJF6-9Nh9j0Va',
  appKey: process.env.LEANCLOUD_APP_KEY || 'Y0Ma4uJYsgHBX7uQBMMby5sp',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'pwpLDmVHzBGdihDpME24yEX8'
});*/

var os = require('os');  
var IPv4,hostName;
hostName=os.hostname();
for(var i=0;i<os.networkInterfaces().en0.length;i++){  
    if(os.networkInterfaces().en0[i].family=='IPv4'){  
        IPv4=os.networkInterfaces().en0[i].address;  
    }  
}  
console.log('----------local IP: '+IPv4);  
console.log('----------local host: '+hostName);  


var http = require("http");
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"});  
    response.write(IPv4);
    response.write(hostName);
    response.end();
}).listen(process.env.LEANCLOUD_APP_PORT);
console.log("nodejs start listen process.env.LEANCLOUD_APP_PORT port!");