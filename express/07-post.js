const express = require('express');
const app = express()
const logger = require('./logger.js')
let {people} = require('./json-data.js')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/login',(req,res)=>{
    console.log(req.body);
    if (req.body.name=='') {
        return res.status(401).send('Please enter the name')
    }
    res.status(200).send(`<h1>request sent ${req.body.name}</h1>`)
})
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name)
    {
        return res
        .status(400)
        .json({success:false , msg:'please provide a name' } )
    }
    res.status(201).send({success:true , person : name })
})

app.post('/api/postman/login',(req,res)=>{
    const{name} = req.body
     if(!name)
    {
        return res
        .status(400)
        .json({success:false , msg:'please provide a name' } )
    }
    res.status(201).send({success:"the person is cutie in nature" , person : name })
})
                                                                                                                               


app.listen(5000,()=>{
    console.log('server started listening to port 5000');
})
