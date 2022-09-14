const express=require('express');
const app=express();
const port=process.env.PORT || 2000;

const mongoose=require('./connection');
const authUser=require('./route/auth');
const userUser=require('./route/user');
const computerRoute=require('./route/computer');

app.use(express.json());
app.use(authUser);
app.use(userUser);
app.use(computerRoute);




app.listen(port,()=>{
    console.log(`the server is running on the ${port}`);
})
