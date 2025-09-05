require('dotenv').config()
const express = require('express')
const { connect } = require('./utils/connect')

const app = express()

app.get('/',(req,res) => {
    res.send('Hello world')
})


connect()
.then(() => {
    console.log('Connected to Database')
    app.listen(process.env.PORT,()=>{
        console.log("Listining to port");
    })
})
.catch((error) => {
    console.log('Error : ' + error.messege)
})