//import mondule
var http = require('http'); 
//listen the request and respond to client
function reqListener(req, res){
  console.log(req.url);
  res.write('Hello, this is node!');
  res.end();
}
var server = http.createServer(reqListener);
server.listen(9090);