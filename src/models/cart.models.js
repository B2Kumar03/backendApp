const mongoose = require("../db/db");

const cartSechema = mongoose.Schema({
  userId: { type: String, required: true },
  title:{type:String},
  price:{type:Number},
  description:{type:String},
  image:{type:String},
  
});

const cartModel=mongoose.model('cart',cartSechema)

module.exports=cartModel


