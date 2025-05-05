const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Book=require('./model');

app.use(express.json());

mongoose.connect("mongodb+srv://gaikwadsatvik555:satvik555@cluster0.gwj3knx.mongodb.net/tryagain")
    .then(()=>console.log("connected succesfull"))
    .catch((err)=>console.log(err));


app.get("/books",async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json(books);
    }catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
});

app.post("/books",async(req,res)=>{
    try{
        const {title,author,price,genre}=req.body;
        if(!title || !author || !price ||!genre){
            return res.status(400).json({ error: "All fields are required" });
        }
        const book=new Book({title,author,price,genre});
        await book.save();
        res.status(200).json(book);
    }catch(err){
        res.status(501),json({
            success:false,
            error:err.message
        })
    }
})

app.delete("/books/:id",async(req,res)=>{
    try{

        const delet=await Book.findByIdAndDelete(req.params.id);
        if(!delet){
            return res.status(401).json({
                success:false,
                message:"book not found"
            })
        }
        res.json({ message: 'Book deleted' });

    }
    catch(err){
        res.status(501).json({
            success:false,
            error:err.message
        })
    }
})

app.put("/books/:id",async(req,res)=>{
    try{
        const update=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(401).json({err:"book not found"});
        }
        res.status(200).json({
            success:true,
            data:update
        })
    }
    catch(err){
        res.status(501).json({
            error:err.message
        })
    }
})
app.listen(3000,()=>{
    console.log("server started on 3000 port");
})