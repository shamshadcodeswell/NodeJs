const express = require('express')
const app = express()
const path =  require('path')

app.use(express.static('./navbar-app/public'))
app.get('/',(req,res)=>{
    res
    .status(200)
    .sendFile(path.resolve(__dirname,'navbar-app','index.html'))
})
app.get('*splash',(req,res)=>{
    res.status(404).send('<h1>Page not found !</h1>')
})

app.listen(5000, ()=>{
    console.log('server is listening on the port 5000');  
})