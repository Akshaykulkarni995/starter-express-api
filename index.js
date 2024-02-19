require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
app.use(bodyParser.json())
const PatientListReq = require("./src/patient-landing-page/patient-list-req.json")
const PatientListRes = require("./src/patient-landing-page/patient-list-res.json")
const DocumentListReq = require("./src/document-list/document-list-req.json")
const DocumentListRes = require("./src/document-list/document-list-res.json")

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.post("/GetPatientList",(req,res)=>{
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

app.post("/GetDocumentList",(req,res)=>{
    let body = req.body
    if (JSON.stringify(DocumentListReq)=== JSON.stringify(body)){
        setTimeout(()=>{
            res.send(DocumentListRes);
            },2000)
            }else {
                console.log('Error: Request does not match definition')
                res.status(400).send('Request does not match definition').end();
                }
    
})

app.listen(process.env.PORT,()=>{
    console.log(`I am live ${PORT}`);
})