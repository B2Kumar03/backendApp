const express = require('express');
const router = express.Router();
const products=require('../models/products.models')

router.get('/product',async(req,res)=>{
  const data=await products.find()
  try {
     res.status(200).send(data)
  } catch (error) {
    res.status(201).send({message:"Internal error"})
  }
  
})

module.exports=router