const http = require ('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const stream = fs.createReadStream('./content/subfolder/big.txt',{encoding : 'utf8'})
    stream.on('data',(chunk)=>{
        stream.pipe(res.end(chunk))
    })
    
}
)

server.listen(5000)

