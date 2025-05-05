const mongoose=require('mongoose');

const bookschema=new mongoose.Schema({
    title:{type:String,reuired:true},
    author:String,
    price:Number,
    genre:String
});

module.exports=mongoose.model('Book',bookschema);