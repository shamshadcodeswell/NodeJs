const express = require('express')
const router = express.Router()
const {people} = require('../json-data')
const{
    addPerson,
    updatePerson,
    removePerson,
    getPerson  
} = require('../controllers/people.js')

router.post('/',addPerson)

router.post('/postman',getPerson)
                                                                                                                               
router.put('/:id',updatePerson)

router.delete('/:id',removePerson)

router.get('/', getPerson)


module.exports = router