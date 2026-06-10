const express = require('express')
const router = express.Router()
const {people} = require('../json-data')

router.post('/',(req,res)=>{
    const {name} = req.body
    if(!name)
    {
        return res
        .status(400)
        .json({success:false , msg:'please provide a name' } )
    }
    res.status(201).send({success:true , person : name })
})

router.post('/postman',(req,res)=>{
    const{name} = req.body
     if(!name)
    {
        return res
        .status(400)
        .json({success:false , msg:'please provide a name' } )
    }
    res.status(201).send({success:"the person is cutie in nature" , person : name })
})
                                                                                                                               
router.put('/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    // res.json({id,name})

    const person = people.find((p) => p.id === Number(id))

    if(!person){
        return res.json({ success: false, msg: 'person not found' })
    }
    const updatedPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person
    })
    res.send(updatedPeople)
})

router.delete('/:id',(req,res)=>{
    const{id}=req.params
    const idCheck = people.find((p)=>p.id === Number(id))
    if(!idCheck){
       return res.status(200).json({ success: false, msg: 'person not found' })
    }
    const updatedPeople = people.filter((person)=>
        person.id !== Number(id)
    )
    res.status(200).json({success:true, data : updatedPeople })
    })

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})


    module.exports = router