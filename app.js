const express=require('express')
const mongoose = require('mongoose')

const url='mongodb+srv://PRASH02:PRASH321@cluster0.thttafi.mongodb.net/SampleDb'
const app = express()

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
const con = mongoose.connection;
con.on('open',()=>{
    console.log('Connected..')
})

app.use(express.json())

const router= require('./routers/sample')
app.use('/sample',router)

app.listen(9000,()=>{
    console.log('server listening..')
})