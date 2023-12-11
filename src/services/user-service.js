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
    async getallusers(){
        try{
            const result=await this.userRepo.getallusers();
            return result;
        }
        catch(err){
            console.log("Error in getting all users in service")
            throw err;
        }
    }
    async checkLogin(userobj) {
        try {
            const data = await this.userRepo.getallusers();
    
            const isLoggedIn = data.some(element => {

                return element.email === userobj.email && element.password === userobj.password;
            });
    
            return isLoggedIn;
        } catch (err) {
            console.log("Error in checking login in service");
            throw err;
        }
    }
}    
module.exports=userService;
