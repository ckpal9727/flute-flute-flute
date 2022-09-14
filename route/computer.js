const Computer=require('../model/Computer');
const verify=require('../verify');
const Router=require('express').Router();

Router.get('/computer',verify,async(req,res)=>{
   
    if(req.user)
    {
        const computer=await Computer.find();
        try {
            res.json({computer});
        } catch (error) {
            res.json({error})
        }
    }
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

Router.put('/addingProblem/:id',verify,async(req,res)=>
{
    const {problemState}=req.body;
    const computerId=req.params.id;
    // res.send(typeof(computerId));
    // console.log(computerId);
    if(req.user)
    {
       
           const addingProblem=await Computer.findOneAndUpdate({computerId:computerId},{problemState:true});

           if(addingProblem){
            const updatedComputerProblem=await Computer.find({computerId:computerId});
            res.json({updatedComputerProblem});
           }
           if(req.user.isLabAssistant)
           {
            const settingProblem=await Computer.findOneAndUpdate({computerId:computerId},{problemState:false});
           }
    }else{
        res.send("You Are not user");
    }
});



module.exports=Router;