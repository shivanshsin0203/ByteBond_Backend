const express=require('express')
const {port}=require('./config/serverconfig')
const app=express();
const connect=require('./config/database');
app.listen(port,async ()=>{
      console.log("Server Started at "+port);
      await connect();
      console.log("Connected to databse");
     })