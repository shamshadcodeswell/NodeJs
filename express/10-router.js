
const express = require('express');
const app = express()
const logger = require('./logger.js')
const peopleRouter = require('./routes/people')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',peopleRouter)

app.post('/login',(req,res)=>{
    console.log(req.body);
    if (req.body.name=='') {
        return res.status(401).send('Please enter the name')
    }
    res.status(200).send(`<h1>request sent ${req.body.name}</h1>`)
})


app.listen(5000,()=>{
    console.log('server started listening to port 5000');
    
})


