// const http = require ('http')
// const fs = require('fs')


// const server = http.createServer((req,res)=>{   
//   const stream = fs.createReadStream('./content/subfolder/big.txt',{encoding : 'utf8'})  
//     stream.pipe(res)
        
//     })
    

// server.listen(5000)

const http = require ('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{   
  const stream = fs.createReadStream('./content/subfolder/big.txt',{encoding : 'utf8'})  
    stream.pipe(res)
        
    })
    

server.listen(5000)