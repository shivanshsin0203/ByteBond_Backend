const userrepo=require('../repository/user-repository');
class RecommendService{
    constructor(){
        this.userrepo=new userrepo();
    }
    async recommend(id){
        const user=await this.userrepo.getuserbyid(id);
        const data=await this.userrepo.getallusers();
        const removeddata=data.filter(element=>element.email!==user.email);
        const recommend=removeddata.map((element)=>{
            const match=element.skills.filter(skill=>user.skills.includes(skill));
            let score=match.length;
            if(element.college===user.college){
                score=score+2;
            }
            
            return { ...element._doc, score: score };
        });
        recommend.sort((a,b)=>b.score-a.score);
        return recommend;
      
    }
}
module.exports=RecommendService;