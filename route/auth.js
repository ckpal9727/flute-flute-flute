const mongooose=require('mongoose');
const jwt=require('jsonwebtoken');
const crypto=require('crypto-js');
const User=require('../model/User');


const Router=require('express').Router();


Router.post('/register',async(req,res)=>
{
   const {name,email,password,hobbie}=req.body;
   
   const encPassword=crypto.AES.encrypt(password,"secret").toString();
   const user=new User({name:name,email:email,password:encPassword,hobbie:hobbie}) ;
   try {
    user.save();
    res.json({user});
   } catch (error) {
    console.log(error);
    
   }
});

Router.post('/login',async(req,res)=>
{
    const {email,password}=req.body;
    const existUser=await User.findOne({email:email});
    if(!existUser)
    {
        res.send("You are not user");
    }else{
        const byte=crypto.AES.decrypt(existUser.password,"secret");
        const originalPassword=byte.toString(crypto.enc.Utf8);
        if(originalPassword!==password){
            res.send("You Password is wrong");
        }else{
            const accessToken=jwt.sign({id:existUser._id,email:existUser.email},"secret",{expiresIn:"5d"});
            const {password,...info}=existUser._doc;
            res.json({info,accessToken});
        }
    }
})

module.exports=Router;