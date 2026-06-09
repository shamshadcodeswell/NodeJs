const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Homepage</h1>')
    
})
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>about</h1>')
    
})
app.all('*splat',(req,res)=>{
    res.status(404).send('<h1>Page not Found !</h1>')
})




app.listen(5000,()=>{
    console.log('server is listening');
    
})