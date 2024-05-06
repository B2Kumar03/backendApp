const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt')
const User=require('../models/user.models')

router.post('/register',async(req,res)=>{
    const data = req.body;
    console.log(data);
    try {
        const user = await User.findOne({ email: data.email });
        if (user) {
            res.status(400).json({ message: "Email already exists" });
        } else {
            // Hash the password
            
            const hashedPassword = await bcrypt.hash(data.password, 4);
            
            // Update the password in the data object with the hashed value
            data.password = hashedPassword;
            // Create the user
            await User.create(data);
            res.status(200).json({ message: "Successfully registered" });
        }
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  })
  module.exports = router;