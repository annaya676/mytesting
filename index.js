import express from 'express';
const PORT=8899;
const app=express();
app.get("/",(req,res)=>{
    res.json({"err":0,"msg":"My Application"})
})
app.get("/products",(req,res)=>{
    res.json({"err":0,"msg":"My products"})
})
app.listen(PORT,(err)=>{
    console.log(`Server work on ${PORT}`)
})