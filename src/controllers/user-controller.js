const userservice=require('../services/user-service');
const userserv=new userservice();

const adduser=async(req,res)=>{
    try{
        const result=await userserv.adduser(req.body);
        res.status(200).json(
            {   data:result,
                message:"Signed in successfully",
                success:true
            });
    }
    catch(err){
        res.status(500).json({message:"Error in adding user controller",err});
    }
}
const getallusers=async(req,res)=>{
    try{
        const result=await userserv.getallusers();
        res.status(200).json(
            {   data:result,
                message:"Got all users successfully",
                success:true
            });
    }
    catch(err){
        res.status(500).json({message:"Error in getting all users controller",err});
    }
}
const checkLogin=async(req,res)=>{
    try{
        console.log(req.body);
        const result=await userserv.checkLogin(req.body);
        res.status(200).json(
            {   data:result,
                message:"Checked login successfully",
                success:true
            });
    }
    catch(err){
        res.status(500).json({message:"Error in checking login controller",err});
    }
}
module.exports={adduser,getallusers,checkLogin};