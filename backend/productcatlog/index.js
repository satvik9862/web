const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));

app.get("/products",(req,res)=>{
    fs.readFile("./product.json","utf-8",(err,data)=>{
        if(err){
            res.status(400).json("err to read file");
        }
        const products=JSON.parse(data);
        res.json(products);
    })
});

app.listen(3000,()=>{
    console.log("app runnig on port 3000");
})