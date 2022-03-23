const express = require('express')
const app = express()
const port = 5000


// mongoose(Object Modeling Tool) : MongoDB ODM(Object Documnet Mapper)
const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://wglee:wglee@mongocluster.wwi02.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected..')).catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 ~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})