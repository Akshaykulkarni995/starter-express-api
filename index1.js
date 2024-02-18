const express = require("express");
const app = express()

const PORT = process.env.PORT || 5001;

app.get("/",(req,res)=>{
    res.json({message:"Hello backed"})
})

app.listen(PORT,()=>{
    console.log("live , ${PORT}");
})