const express=require('express');
require('./MongooseDatabaseConnection')
const Product=require('./MongooseConnection');
const app=express();
app.use(express.json());
app.post('/',async(req,res)=>{
    let data=new Product(req.body);
    let result=await data.save();
    console.log(result)
    res.send(result);
})
app.listen(3000);