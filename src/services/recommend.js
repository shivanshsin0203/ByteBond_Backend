const userrepo=require('../repository/user-repository');
class RecommendService{
    constructor(){
        this.userrepo=new userrepo();
    }
    async recommend(id){
        const user=await this.userrepo.getuserbyid(id);
        const data=await this.userrepo.getallusers();
        const removeddata=data.filter(element=>element.email!==user.email);
        
    }
}
module.exports=RecommendService;