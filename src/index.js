const express=require('express')
const {port}=require('./config/serverconfig')
const app=express();
const connect=require('./config/database');
const userRepository=require('./repository/user-repository');
app.listen(port,async ()=>{
      console.log("Server Started at "+port);
      await connect();
      console.log("Connected to databse");
      const userobj={
          name:"sai",
          email:"sds@gmail.com",
              password:"sai",
                  skills:["java","nodejs"],
                          college:"srm"
      };
      const userrepo=new userRepository();
      await userrepo.getallusers(userobj);
})