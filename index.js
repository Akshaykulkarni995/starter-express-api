const express = require('express')
const app = express()
const cors = require("cors")
app.use(express.json());
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json());



const GetPatientReq = require("./src/patient-landing-page/getpatientreq.json")
const GetPatientRes = require("./src/patient-landing-page/getpatientres.json")


app.all('/', (req, res) => {
  console.log("Just got a request!")
  res.send('Yo!')
})

//showing demo records
app.get('/demo', (req, res) => {
    res.json([
      {
        id: '001',
        name: 'Smith',
        email: 'smith@gmail.com',
      },
      {
        id: '002',
        name: 'Sam',
        email: 'sam@gmail.com',
      },
      {
        id: '003',
        name: 'lily',
        email: 'lily@gmail.com',
      },
    ]);
  });

app.post("/Patient/GetPatientsList",(req,res)=>{
  const { GetPatientReq } = req.body;
  res.json(GetPatientRes)
})

app.listen(process.env.PORT || 8000)