const { error } = require('console');
const express=require('express');
const mongoose=require('mogoose');
const app=express();

app.set('view engine','ejs');

mongoose.connect()
.then(()=>console.log("connected succesfully"))
.catch((err)=>console.log("err to connect",err))

const musicschema=new mongoose.Schema({

});
const Music=mongoose.model('Music',musicschema);

app.get('/all',async(req,res)=>{
    try{

    }catch(err){
        res.status(501).json({
            success:false,
            message:err.meassage
        })
    }
})

app.get('/all',async(req,res)=>{
    try{

    }catch(err){
        res.status(501).json({
            success:false,
            message:err.meassage
        })
    }
})
app.get('/all',async(req,res)=>{
    try{

    }catch(err){
        res.status(501).json({
            success:false,
            message:err.meassage
        })
    }
})
app.get('/all',async(req,res)=>{
    try{

    }catch(err){
        res.status(501).json({
            success:false,
            message:err.meassage
        })
    }
})
app.get('/all',async(req,res)=>{
    try{

    }catch(err){
        res.status(501).json({
            success:false,
            message:err.meassage
        })
    }
})
app.listen(3000,()=>{
    console.log("app running on port 3000");
})