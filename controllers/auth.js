const User = require('../models/model')

const EmailPass = async(req,res)=>{
    if(!req.body.email)
        return res.status(400).json({message:'User email is required',status: 400})
    if(!req.body.password)
        return res.status(400).json({message:'Password is required',status:400})
    try{
        const emailpass = new  User({
            email:req.body.email,
            password:req.body.password
        })
        const result = await emailpass.save()
        res.status(200).json(result)
    }
    catch(err){
        res.status(500)
        throw new Error(err.message)
    }
}

const EmailPass2 = async(req,res)=>{
    try{
        const emailpass2 =await User.find()
        res.status(200).json(emailpass2)
    }catch(err){
        res.status(500)
        throw new Error(err.message)
    }
}

const EmailPass3 = async(req,res)=>{
    try{
        const emailpass3 = await User.findById(req.params.id)
        emailpass3.email = req.body.email
        const result =await emailpass3.save()
        res.status(200).json(result)
    }catch(err){
        res.status(500)
        throw new Error(err.message)
    }
}

module.exports = {EmailPass,EmailPass2,EmailPass3}