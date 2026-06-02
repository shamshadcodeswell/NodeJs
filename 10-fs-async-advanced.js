// const util = require('util')
const {readFile , writeFile} = require('fs').promises

// const getText = (path) =>{
//     return new Promise ((resolve , reject) =>{
//         readFile(path,'utf8',(err,data)=>
//         {
//           if(err){
//             reject(err)
//           }
//           else{
//             resolve(data);
            
//           }  
//         }) 
//     })
// }


// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try {
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    console.log(first, second)
    const result = await writeFile('./content/result-fs-async-advanced.txt', ` ${first} ${second}`, {flag:'a'})

    }
    catch (err){
    console.log(err)
    }
}

start()

// getText('./content/first.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=>console.log(err))