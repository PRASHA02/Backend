const mongoose = require('mongoose')

const connectDb = async() =>{
    try{
        const con = await mongoose.connect("mongodb+srv://PRASH02:PRASH321@cluster0.thttafi.mongodb.net/Training",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log(`Connected  to DB ${con.connection.process}`)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb