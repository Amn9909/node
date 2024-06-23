const http = require("http")
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    const ip = req.connection.remoteAddress
    let log = `${Date.now()} : new req ${ip}\n`

    const urlData = url.parse(req?.url)
    console.log(urlData)

    if(urlData?.pathname === '/favicon.ico') return res.end()

    fs.appendFileSync('logs.txt', log, (err, data) => {
        switch (urlData?.pathname) {
            case '/':
                // console.log(urlData)
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.write(`Welcome to ${urlData?.pathname}`)
                res.end('`Welcome to ${urlData?.pathname}`')
                break;

            case '/home':
                // console.log(urlData)
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.write(`Welcome to ${urlData?.pathname}`)
                res.end(`Welcome to ${urlData?.pathname}`)
                break;

            case '/user':
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.write(`Welcome to ${urlData?.pathname}`)
                res.end(`Welcome to ${urlData?.pathname}`)
                break;

            default:
                res.write('Server is up')
                res.end()
                break;
        }
    })
})


server.listen(7878, () => {
    console.log('Server is running on port 7878');
});