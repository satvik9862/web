const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));

app.get("/users",async(req,res)=>{
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err){
            return res.status(500).json({error:"file not found"});
        }
        const users=JSON.parse(data);
        res.json(users);
    })
})

app.listen(3000,()=>{
    console.log("app running on 3000");

})

