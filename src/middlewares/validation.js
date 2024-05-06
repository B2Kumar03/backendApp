const validation=(req,res,next)=>{
    console.log("middlewares")
    const data=req.body
    if(!data.userId || !data.image || !data.description || !data.sold || !data.totalReview || !data.price || !data.sale){
        res.status(400).send({message:"Something missing"})
    }
    else{
        next()
    }
}

module.exports=validation