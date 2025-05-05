const express=require('express');
const mongoose=require('mongoose');
const { type } = require('os');
const app=express();

app.set('view engine','ejs');

mongoose.connect("mongodb+srv://gaikwadsatvik555:satvik555@cluster0.gwj3knx.mongodb.net/tryagain")
.then(()=>console.log("connected succesfully"))
.catch((err)=>console.log("err to connect",err))

const studentschema=new mongoose.Schema({
    Name:{type:String,
        required:true
    },
    Roll_No:{
        type:Number,required:true
    },
    WAD_Marks: Number,
    CC_Marks: Number,
    DSBDA_Marks: Number,
    CNS_Marks: Number,
    AI_marks: Number
})
const sampleStudents = [
    { Name: 'Alice', Roll_No: 1, WAD_Marks: 28, CC_Marks: 25, DSBDA_Marks: 30, CNS_Marks: 32, AI_marks: 35 },
    { Name: 'Bob', Roll_No: 2, WAD_Marks: 19, CC_Marks: 22, DSBDA_Marks: 21, CNS_Marks: 20, AI_marks: 24 },
    { Name: 'Charlie', Roll_No: 3, WAD_Marks: 35, CC_Marks: 38, DSBDA_Marks: 42, CNS_Marks: 40, AI_marks: 45 },
    { Name: 'David', Roll_No: 4, WAD_Marks: 15, CC_Marks: 18, DSBDA_Marks: 19, CNS_Marks: 17, AI_marks: 21 }
];

const Student=mongoose.model('Student',studentschema);
// Student.insertMany(sampleStudents);
app.get('/all',async(req,res)=>{
    try{
        const students=await Student.find();
        const count=await Student.countDocuments();
        res.send(`Total Student:${count}<br><pre>${JSON.stringify(students,null,2)}</pre>}`)
    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})


app.get('/dsbda20',async(req,res)=>{
    try{
        const students=await Student.find({DSBDA_Marks:{$gt:20}})
        res.render('table',{students});
    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})

app.get('/table',async(req,res)=>{
    try{
        const students=await Student.find();
        res.render('table',{students});
    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})

app.get('/delete/:name',async(req,res)=>{
    try{
        await Student.deleteOne({ Name: req.params.name });
        res.send(`Deleted student ${req.params.name}`);
    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})

app.get('/update/:name',async(req,res)=>{
    try{
        const name = req.params.name;
    await Student.updateOne({ Name: name }, {
        $inc: {
            WAD_Marks: 10,
            CC_Marks: 10,
            DSBDA_Marks: 10,
            CNS_Marks: 10,
            AI_marks: 10
        }
    });
    res.send(`Updated marks for ${name}`);
    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})

app.get('/allabove25',async(req,res)=>{
    try{
        const students = await Student.find({
            WAD_Marks: { $gt: 25 },
            CC_Marks: { $gt: 25 },
            DSBDA_Marks: { $gt: 25 },
            CNS_Marks: { $gt: 25 },
            AI_marks: { $gt: 25 }
        });
        res.render('table', { students });
    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})
app.listen(3000,()=>{
    console.log("app running on port 3000");
})