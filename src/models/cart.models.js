const mongoose = require("../db/db");

const cartSechema = mongoose.Schema({
  userId: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  review: {
    type: Number,
    required: true,
  },
  totalReview: {
    type: String,
    required: true,
  },
  sold: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sale: {
    type: Number,
    required: true,
  },
});

const cartModel=mongoose.model('cart',cartSechema)

module.exports=cartModel
