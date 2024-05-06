const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt')
const User=require('../models/user.models')


router.post('/login',async(req,res)=>{
    const data = req.body;
    try {
        const user = await User.findOne({ email: data.email });
        if (!user) {
            res.status(400).json({ message: "Email does not exist" });
        } else {
            // Check if the password is correct
            const isPasswordCorrect = await bcrypt.compare(
                data.password,
                user.password
            );
            if (!isPasswordCorrect) {
                res.status(400).json({ message: "Incorrect password" });
            } else {
              const jwt = require("jsonwebtoken");
              const payload = { foo: "bar" };
              const secretKey = data.email;
              const token = jwt.sign(payload, secretKey);
                res.status(200).json({ message: "Successfully logged in",token:token,userId:user._id});
            }
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  })

  module.exports=router