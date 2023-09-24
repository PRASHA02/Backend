const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',async(req,res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
            res.send('ERROR' + err)
        }
})
router.get('/:id',async(req,res)=>{
  try{
      const alie = await Alien.findById(req.params.id)
      res.json(alie)
  }catch(err){
          res.send('ERROR' + err)
      }
})
router.patch('/:id',async(req,res)=>{
  try{
    const ali=await Alien.findById(req.params.id)
    ali.tech= req.body.tech
    const result = await ali.save()
    res.json(result)
  }
  catch(err){
    res.send(err)
  }
})
router.delete('/:id',async(req,res)=>{
  try{
    const ali=await Alien.findById(req.params.id)
    ali.tech= req.body.tech
    const result = await ali.remove()
    res.json(result)
  }
  catch(err){
    res.send(err)
  }
})
router.post('/',async(req, res)=>{
          const alien = new Alien({
            name:req.body.name,
            tech:req.body.tech,
          })
          try{
              const a1=  await alien.save()
              res.json(a1)
          }catch(err){
            res.send('error'+err)
          }
})

module.exports= router