const user= require('../models/user');

class userRepository{
    async adduser(userobj){
        const result=await user.create(userobj);
        return result;
    }
    async getallusers(){
        const result=await user.find();
        return result;
    }
    async getuserbyid(id){
        const result=await user.findById(id);
        return result;
    }
    async updateuser(id,userobj){
        const result=await user.findByIdAndUpdate(id,userobj);
        return result;
    }
    async deleteuser(id){
        const result=await user.findByIdAndDelete(id);
        return result;
    }
}
module.exports=userRepository();