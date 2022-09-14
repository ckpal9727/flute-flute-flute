const mongoose=require('mongoose');

const computerSchema=mongoose.Schema({
    computer_id:
    {
        type:String,
        required:true,
        unique:true
    },
    problemState:
    {
       type:Boolean,
       default:false
    },
    problemDescription:
    {
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model('Computer',computerSchema);