const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        
    },
    hobbie:
    {
        type:String,
    },
})

module.exports=mongoose.model('user',userSchema);