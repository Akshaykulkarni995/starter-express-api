const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const PatientListReq = require("./src/patient-landing-page/patient-list-req.json")
const PatientListRes = require("./src/patient-landing-page/patient-list-res.json")
app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.post("/service",(req,res)=>{
    let body = req.body
    if (JSON.stringify(PatientListReq)=== JSON.stringify(body)){
        setTimeout(()=>{
            res.send(PatientListRes);
            },2000)
            }else {
                console.log('Error: Request does not match definition')
                res.status(400).send('Request does not match definition').end();
                }
    
})

app.listen(PORT,()=>{
    console.log("I am live ");
})