const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Server is up</h1>')
}).listen(9898)