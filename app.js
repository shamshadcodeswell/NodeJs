const http = require('http');

const server= http.createServer()

    server.on('request',(req,res)=>{
    if(req.url=='/'){
        res.end('Welcome to our homepage')
    }
    else if(req.url=='/about'){
        res.end('Here is a short intro of ours')
    }
    else {res.end(`
       <h1>Oops!</h1>
       <p>cant find that !</p> 
       <a href="/">back home</a>
       `
    )
    }
})
server.listen(5000)