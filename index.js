const express=require('express');
const app=express();

const mongoose=require('./connection');
const authUser=require('./route/auth');
const userUser=require('./route/user');

app.use(express.json());
app.use(authUser);
app.use(userUser);




app.listen(2000,()=>{
    console.log("the server is running on the 2000");
})