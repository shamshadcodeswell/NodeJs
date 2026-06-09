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
    app.get('/api/v1/query',(req,res)=>{
    const{search,limit} = req.query;
    let sortedProducts = [...products]   
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
        res.status(200).send(sortedProducts)
    }
    if (sortedProducts.length==0) {
       return  res.status(200).send('product not found')
    }
    
        res.send(products)

})




app.listen(5000, ()=>{
    console.log('server started listening at port 5000');
    
})