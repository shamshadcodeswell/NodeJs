const eventEmitter = require('events')
const customEmitter = new eventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`event recieved ${name} ${id}`);
    
})
customEmitter.on('response',()=>{
    console.log(`event recieved`);
    
})

customEmitter.emit('response', 'john', 34)

