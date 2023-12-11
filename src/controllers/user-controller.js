const userservice=require('../services/user-service');
const userserv=new userservice();

const adduser=async(req,res)=>{
    try{
        console.log(req.body);
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
module.exports={adduser};