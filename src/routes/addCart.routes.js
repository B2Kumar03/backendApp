const express = require('express');
const router = express.Router();
const cartModel=require('../models/cart.models');
const validation=require('../middlewares/validation')


router.post('/addCart',validation,async(req,res)=>{
    const data=req.body
    try {
      await   cartModel.create(data)
      res.status(201).send({message:"product is added successfully"})
    } catch (error) {
     res.status(501).send({message:"Internal server error"})
    }
})
module.exports=router