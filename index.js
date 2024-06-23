const http = require("http")
const fs = require('fs')

http.createServer((req, res) => {
    const ip = req.connection.remoteAddress
    let log = `${Date.now()} : new req ${ip}\n`
    fs.appendFile('logs.txt', log, (err, data) => {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Server is up</h1>')
    })
}).listen(9898)