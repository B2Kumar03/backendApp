const mongoose=require('mongoose')
const URL=process.env.MONGO_URL 
mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to database1");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

  module.exports=mongoose