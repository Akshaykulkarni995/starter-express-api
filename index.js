const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5001;


app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/service",(req,res)=>{
    res.send(
       "heloo test"
    )
})

app.listen(PORT,()=>{
    console.log("I am live ");
})