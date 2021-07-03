const express = require('express') // require the express package , import express library
const app = express() // initialize your express app instance
const cors = require('cors');
require('dotenv').config();
app.use(cors()) // after you initialize your express app instance
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 app.get('/student-list',(req,res) => {
let students = [
    {name:'s1' , id:1},
    {name:'s2' , id:2},
    {name:'s3' , id:3}
]
res.json(students)
 })
// app.listen(process.PORT) // kick start the express server to work
app.listen(8000) // kick start the express server to work