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

router.get('/getCart',async(req,res)=>{
  const {userId}=req.body;

  try {
    const data=await cartModel.find({userId:userId})
    // console.log(data);
    if(!data){
      res.status(401).send({meassage:"Data is not awailable."})
    }
    else{
      res.status(201).send({data:data})

    }
  } catch (error) {
    res.status(401).send({message:"Internal error"})
  }
})


module.exports=router