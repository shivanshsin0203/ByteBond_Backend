const message=require('../models/messages');
class messageRepository{
    async addmessage(messageobj){
        const result=await message.create(messageobj);
        return result;
    }
    async getallmessages(){
        const result=await message.find();
        return result;
    }
    async getmessagebyid(id){
        const result=await message.findById(id);
        return result;
    }
    async updatemessage(id,messageobj){
        const result=await message.findByIdAndUpdate(id,messageobj);
        return result;
    }
    async deletemessage(id){
        const result=await message.findByIdAndDelete(id);
        return result;
    }
}
module.exports=messageRepository;