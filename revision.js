// // const {readFile, writeFile} = require('fs');

// // readFile('./content/first.txt','utf8',(err,data)=>{
// //     if(err){
// //         console.log(err);      
// //     }else{
// //     const first = data;
// //     readFile('./content/second.txt','utf8',(err,response)=>{
// //     if(err){
// //         console.log(err);      
// //     }else{
// //     const second = response;

// //         writeFile('./content/subfolder/revision.txt',` ${first} ${second} `,'utf8',{flag : 'a'}
// //             (err,result)=>{
// //                 if (err) {
// //                     console.log(err);
                    
// //                 }else{
// //                     console.log('completed');
                    
// //                 }
// //             })

// //     }
// // })
// //     }
// // })


// // const {readFile, writeFile} = require('fs')

// // const promiseReadFile = (path)=>{
// //     return  new Promise ((resolve , reject)=>{
// //         readFile(path,'utf8',(err,data)=>{
// //             if (err){
// //                 reject(err)
// //             }else{
// //             resolve(data)
// //             }
// //         })
// //     })
// // }
// // const promiseWriteFile = (path,content)=>{
// //     return  new Promise ((resolve , reject)=>{
// //         writeFile(path, content ,{encoding : 'utf8', flag : 'a'},(err)=>{
// //             if (err){
// //                 reject(err)
// //             }else{
// //                 resolve()
// //             }
// //         })
// //     })
// // }

// // const start = async()=>{
// //     try {
// //          const first = await promiseReadFile('./content/first.txt')
// //          const second = await promiseReadFile('./content/second.txt')
// //          await promiseWriteFile('./content/subfolder/revision-2.txt',`${first} ${second} `)
// //     } catch (error) {
// //         console.log(error);
        
// //     }
// // }

// // start()



// const {readFile, writeFile } = require('fs')

// const readFilePromise = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>
//             {
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//             })
//      })
// }
// const writeFilePromise = (path, data)=>{
//     return new Promise((resolve,reject)=>{
//         writeFile(path,data, {encoding:"utf8" , flag : "a"},(err)=>
//             {
//             if(err){
//                 reject(err)
//             }
//             resolve()
//             })
//      })
// }

// async function start() {

//     const first = await readFilePromise('./content/first.txt')
//     const second = await readFilePromise('./content/second.txt')
//     await writeFilePromise('./content/revision.txt',` ${first} ${second }`)
// }
// start()