const {readFile, writeFile } = require('fs')

const readFilePromise = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>
            {
            if(err){
                reject(err)
            }
            resolve(data)
            })
     })
}
const writeFilePromise = (path, data)=>{
    return new Promise((resolve,reject)=>{
        writeFile(path,data, {encoding:"utf8" , flag : "a"},(err)=>
            {
            if(err){
                reject(err)
            }
            resolve()
            })
     })
}

async function start() {

    const first = await readFilePromise('./content/first.txt')
    const second = await readFilePromise('./content/second.txt')
    await writeFilePromise('./content/revision.txt',` ${first} ${second }`)
}
start()