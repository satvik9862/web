// const express=require('express');
// const cors=require('cors');
// const app=express();

// app.use(cors());
// app.use(express.json());

// let tasks=[];
// let idc=1;
// app.get("/task",(req,res)=>{

//     res.json(tasks);
// })

// app.post("/task",(req,res)=>{
//     const {task}=req.body;
//     console.log("in post")
//     console.log(task);
//     const newtext={id:idc++,task};
//     tasks.push(newtext);
//     res.json(newtext);
// })

// app.put("/task/:id",(req,res)=>{
//     const id=req.params.id;
//     const {text}=req.body;
//     const task=tasks.find(task=>task.id===id);
//     if(task){
//         task.text=text;
//         res.json(text);
//     }else{
//         res.status(401).json({err:"not found task"});
//     }
// })


// app.delete("/task/:id",(req,res)=>{
//     const id=req.params.id;
//   tasks=tasks.filter(task=>task.id!==id);
//     res.json({sucess:true});
// })

// app.listen(3000,()=>{
//     console.log("app runnig on 3000");
// })


const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];
let idc = 1;

app.get("/task", (req, res) => {
  res.json(tasks);
});

app.post("/task", (req, res) => {
  const { text } = req.body;
  console.log("POST /task", text);
  const newTask = { id: idc++, text };
  tasks.push(newTask);
  res.json(newTask);
});

app.put("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.text = text;
    res.json(task);
  } else {
    res.status(404).json({ err: "Task not found" });
  }
});

app.delete("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
