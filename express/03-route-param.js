const express = require('express')
const app = express();

const products = require('./json-data.js')

// console.log(products);

app.get('/',(req,res)=>{
    res.status(200).send('<h1>HOMEPAGE</h1> <a href=/api>click here</a>')
})
app.get('/products',(req,res)=>{
    let productList = products.map((product)=>{
        const {name,category,price} = product;
        return {name,category,price}
    })
    res.status(200).json(productList)
})
app.get('/products/:productId',(req,res)=>{
    let id = req.params.productId
    console.log(id);
                               
    const product = products.find((product) => product.id === id)
    if(!product){
        return res.status(404).send("product not found")
    }
    res.status(200).send(product)
})

app.listen(5000, ()=>{
    console.log('server started listening at port 5000');
    
})