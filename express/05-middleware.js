const express = require('express');
const app = express()
const logger = require('./logger.js')


app.use('/about',logger)

app.get('/',(req,res)=>{
    res.send('<h1>homepage</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>homepage</h1>')
})
app.get('/about/contact',(req,res)=>{
    res.send('<h1>homepage</h1>')
})



app.listen(5000,()=>{
    console.log('server started listening to port 5000');
    
})