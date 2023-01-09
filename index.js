 const express = require ('express')
 const app= express()
 var bodyparser = require('body-parser')
 var cors = require('cors')
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

 app.get("/api",(req,res)=>{
    res.json({"response":"hello"})
 })

 app.post("/vars",(req,res)=>{
   console.log(req.body);
 })

 app.listen(5000, ()=>{console.log("Server started on port 5000")})