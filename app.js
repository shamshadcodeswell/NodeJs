const {readFile, writeFile} = require('fs')

const promiseReadFile = (path)=>{
    return  new Promise ((resolve , reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if (err){
                reject(err)
            }else{
            resolve(data)
            }
        })
    })
}
const promiseWriteFile = (path,content)=>{
    return  new Promise ((resolve , reject)=>{
        writeFile(path, content ,{encoding : 'utf8', flag : 'a'},(err)=>{
            if (err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

const start = async()=>{
    try {
         const first = await promiseReadFile('./content/first.txt')
         const second = await promiseReadFile('./content/second.txt')
         await promiseWriteFile('./content/subfolder/revision-2.txt',`${first} ${second} `)
    } catch (error) {
        console.log(error);
        
    }
}

start()