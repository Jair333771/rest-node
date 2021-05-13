var http = require('http');
var server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><body><h1>Hola<h1></body></html>");
    response.end();
});
server.listen(5000);