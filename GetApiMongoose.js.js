const express=require('express');
require('./MongooseDatabaseConnection')
const Product=require('./MongooseConnection');
const app=express();
app.get('/',async(req,res)=>{
    let data=await Product.find();
    res.send(data);
})
app.listen(5000);