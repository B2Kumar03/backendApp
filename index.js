const app=require('./src/app')
const PORT = process.env.PORT || 4040;
const userRoutes = require('./src/routes/userRoutes.routes');
const userRegister=require('./src//routes/userRegister.routes')
const userLogin=require('./src/routes/userLogin.routes')
const products=require('./src/routes/product.routes')
const cart=require('./src//routes/addCart.routes')
const db = require('./src//db/db');

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
