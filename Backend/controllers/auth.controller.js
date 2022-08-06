const jwt =require("jsonwebtoken")
const config=require("../configToken")
const express=require("express")
const User=require("../models/user");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({
    email: email,
   // password: await User.passwordCode(password)
    password: password
  });
  await newUser.save();
  //const saveUser=await newUser.save()
 
  // const token=jwt.sign({id:newUser._id},config.SECRET,{
  //   expiresIn:90000
  // })

  const token=jwt.sign({id:newUser._id}, "secret",{expiresIn:"60s"})
  res.status(200).json({token})
};


module.exports={
    signUp
}