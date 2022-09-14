const Computer=require('../model/Computer');
const verify=require('../verify');
const Router=require('express').Router();

Router.get('/computer',(req,res)=>{
    res.send("this is computer Route");
});

Router.post('/addingComputer',verify,async(req,res)=>
{
    if(req.user.isLabAssistant)
    {
        
        const {computerId,problemState,problemDescription}=req.body;
        const computer=new Computer({computerId:computerId,problemState:problemState,problemDescription:problemDescription});
        try {
            registeredComputer=await computer.save()
            res.json({registeredComputer});
        } catch (error) {
            res.send(error)
        }
    }else{
        // console.log(error);
    }
})



module.exports=Router;