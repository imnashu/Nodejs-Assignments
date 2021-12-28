var fs = require('fs')
// fs.writeFileSync("index.html" , "<h1>Hello World</h1>")

const content = fs.readFileSync('index.html')

const http = require('http')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(content)
        res.end()
    }
})

server.listen(port, hostname)
