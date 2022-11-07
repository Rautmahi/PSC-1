const { Router } = require("express");
const bcrypt = require("bcrypt");

const jwt=require("jsonwebtoken")
require("dotenv").config()
const { UserModel } = require("../models/User.model");
const userController = Router();

userController.post("/signup",(req, res) => {
  const { email, password, age } = req.body;

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.send("Something went wrong,please try again");
    }
    const user=new  UserModel({
        email,
        password:hash,
        age
    })
    try{
        await user.save()
        res.send("Signup Succesfull");
    }
    catch(err)
    {
        console.log(err)
        res.send("something went wrong")
    }
  });
  
});

userController.post("/login",async (req, res) => {

    const{email,password}=req.body
    const user=await UserModel.findOne({email})
    const hash=user.password
    bcrypt.compare(password,hash,function(err,result){

        if (err) {
            res.send("Something went wrong,please try again");
          }
          if(result){
            const token=jwt.sign({userId:user._id},process.env.JWT_SECRET)
            res.send({"msg":"Login Successfull",token})
          }
          else{
            res.send("Invalid Credentials please check it")
          }
    })


  res.send("Login");
});

module.exports = { userController };
