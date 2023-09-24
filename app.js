const express = require('express')
const app = express()
require('dotenv').config()
const connectDb = require('./config/db')

//initialize db
connectDb()

app.use(express.json())
app.use( express.urlencoded({ extended: false }) )
//end point

app.use('/login',require('./routes/authRouter'))

const port = process.env.PORT ||9001

app.listen(port,()=>{
    console.log('listening to port '+port)
})