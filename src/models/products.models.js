const mongoose=require('../db/db')
const  Schema =mongoose.Schema({
    image: {
      type: [String],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    review: {
      type: Number,
      required: true
    },
    totalReview: {
      type: String,
      required: true
    },
    sold: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    sale: {
      type: Number,
      required: true
    }
  })
  const productModel=mongoose.model('products',Schema)

  module.exports=productModel