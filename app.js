const express = require('express')
const app = express()
require('dotenv').config({path:'.env.example'})
const connectDb = require('./config/db')

//initialize db
connectDb()
//for sending and recieving json
app.use(express.json())
app.use( express.urlencoded({ extended: false }))

//end point

app.use('/login',require('./routes/authRouter'))

const port = process.env.PORT ||9001

app.listen(port,()=>{
    console.log('listening to port '+port)
})