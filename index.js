var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/hello') {
    console.log("Hello World from /hello")
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from /hello');
    return;
  }
  if (req.method === 'GET' && req.url === '/test') {
    console.log("Hello World from /test")
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the /test endpoint');
    return;
  }
  console.log("Hello World")
  res.write('** Welcome to GlobalLogic!!!! **'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
