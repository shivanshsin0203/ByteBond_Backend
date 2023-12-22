const messagerepo=require('../repository/message-repository');
class messageservice{
    constructor(){
        this.messagerepo=new messagerepo();
    }
    async previousMsg(roomid){
        const allmessages=await this.messagerepo.getallmessages();
        const messages=allmessages.filter(element=>element.roomid===roomid);
        return messages;
    }
}
module.exports=messageservice;