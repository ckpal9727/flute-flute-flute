const mongoose=require('mongoose');

const url='mongodb+srv://ck:12@cluster0.pgzxkkq.mongodb.net/User?retryWrites=true&w=majority';
const paramsUrl={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}

function mongoDb()
{
    try {
        mongoose.connect(url,paramsUrl);
        console.log("connection successfull");
    } catch (error) {
        console.log(error)
    }
}
mongoDb();