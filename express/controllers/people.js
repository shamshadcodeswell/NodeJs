const {people} = require('../json-data')
const addPerson = (req,res)=>{
    const {name} = req.body
    if(!name)
    {
        return res
        .status(400)
        .json({success:false , msg:'please provide a name' } )
    }
    res.status(201).send({success:true , person : name })
}
const updatePerson = (req,res)=>{
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
}

const removePerson = (req,res)=>{
    const{id}=req.params
    const idCheck = people.find((p)=>p.id === Number(id))
    if(!idCheck){
       return res.status(200).json({ success: false, msg: 'person not found' })
    }
    const updatedPeople = people.filter((person)=>
        person.id !== Number(id)
    )
    res.status(200).json({success:true, data : updatedPeople })
    }

const getPerson = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

module.exports = {
    addPerson,
    updatePerson,
    removePerson,
    getPerson  
}