const http = require('http')
const fs = require('fs')

const data = fs.readFile('databasde.json', 'utf8', (err, pl)=>{
  if (err) console.log(404)
  else console.log(200)
})

console.log(data)