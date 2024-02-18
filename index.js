const express = require('express')
const app = express()
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
app.listen(process.env.PORT || 3000)