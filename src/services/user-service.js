const userrepo=require('../repository/user-repository');
class userService{
    constructor(){
        this.userRepo=new userrepo();
    }
    async adduser(userobj){
        try{
        const result=await this.userRepo.adduser(userobj);
        return result;
    }
        catch(err){
            console.log("Error in adding user in service")
            throw err;
        }
    }
}
module.exports=userService;
