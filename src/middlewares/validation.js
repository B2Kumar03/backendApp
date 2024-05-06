const validation=(req,res,next)=>{
    console.log("middlewares")
    const data=req.body
    if(!data.userId || !data.image || !data.title || !data.description || !data.category || !data.price){
        res.status(400).send({message:"Something missing"})
    }
    else{
        next()
    }
}

module.exports=validation