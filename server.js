const express = require("express");
const dbjson = require("./db/sales.json");
const cors = require("cors");
const app = express();
const port="4004";

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/", (req,res)=>{
    res.json({message:"page run successfully",data:dbjson});
})

app.get("/getstate", (req,res)=>{
   const states = dbjson.map((item,index)=>{
           return item.State;
   })

   const uniqueState = [...new Set(states)]

   res.json({message:"State Data", result:uniqueState})
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})