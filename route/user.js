const Router=require('express').Router();
const User=require('../model/User');
const crypto=require('crypto-js');
const verify=require('../verify');

Router.put('/:id',verify,async(req,res)=>
{
    console.log("I am in updata");
    if(req.user.email===req.params.email)
    {
        if(req.body.password)
        {
             req.body.password=crypto.AES.encrypt(req.body.password,"secret").toString();
        }try {
            const updataUser=await User.findByIdAndUpdate(req,params.id,{$set:req.body},{new:true});
            if(updataUser)
            {
                const {password,...info}=updataUser._doc;
                res.json({info});
            }else{
                res.send("User is not updated");
            }
        } catch (error) {
            console.log(error);
        }
    }else{
        res.send("Not gone in updata");
    }
})
Router.get('/',(req,res)=>
{
    res.send("this is from the user");
})


module.exports=Router;