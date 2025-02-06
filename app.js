const http = require('http')
const fs = require('fs')
let data = {}


fs.readFile('./databsase.json', 'utf8', (err, pl) => {
  err ? data = "404" : data = pl
})

const server = http.createServer((req, res) => {
  handleGET(req, res)
})

const handleGET = (req, res) => {
  data === '404'
    ? res.end('data not found')
    : res.end(data)
}


server.listen(3000, () => console.log("Server is running on localhost:3000"))