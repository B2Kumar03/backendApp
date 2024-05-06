const app=require('./app')
const PORT = process.env.PORT || 4040;
const userRoutes = require('./routes/userRoutes.routes');
const userRegister=require('./routes/userRegister.routes')
const userLogin=require('./routes/userLogin.routes')
const products=require('./routes/product.routes')
const cart=require('./routes/addCart.routes')
const db = require('./db/db');

app.use('/', userRegister);
app.use('/', userLogin);
app.use('/',products)
app.use('/', userRoutes);
app.use('/',cart)

app.get('/',(req,res)=>{
    res.status(200).send({message:'Welcome to our API'})
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
})
