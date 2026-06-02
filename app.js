const { log } = require('console');
const { resolve } = require('dns');
const {readFile , writeFile} = require('fs');
const { reject, result } = require('lodash');

const getText = (path) =>{
    return new Promise ((resolve , reject) =>{
        readFile(path,'utf8',(err,data)=>
        {
          if(err){
            reject(err)
          }
          else{
            resolve(data);
            
          }  
        }) 
    })
}

const start = async()=>{
    try {
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')
    console.log(first, second)

    }
    catch (err){
    console.log(err)
    }
}

start()

// getText('./content/first.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=>console.log(err))