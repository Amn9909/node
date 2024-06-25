const HTTP = require('http')


const server = HTTP.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Servere is live</h1>')
})

server.listen(7878)