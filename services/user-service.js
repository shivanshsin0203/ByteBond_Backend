const userrepo=require('../repository/user-repository');
const nodemailer = require('nodemailer');
const {Email_Id,Email_Pass}=require('../config/serverconfig');
class userService{
    constructor(){
        this.userRepo=new userrepo();
    }
    async adduser(userobj){
        try{
        const result=await this.userRepo.adduser(userobj);
         function sendWelcomeEmail(email){
           const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: Email_Id,
                pass: Email_Pass,
              },
              debug: true,  
              logger: true,
            });
        
            
            const mailOptions = {
                from: Email_Id,
                to: email,
                subject: '🚀 Welcome to ByteBond! 🚀',
                html: `
                    <div style="text-align: center; background-color: #2c3e50; padding: 30px; color: #ecf0f1; font-family: 'Arial', sans-serif;">
                        <h1 style="color: #e74c3c;">Welcome to ByteBond!</h1>
                        <p>
                            🎉 Thank you for joining ByteBond, your connecting place for developers.
                            Connect with developers matching your skills and explore exciting projects!
                        </p>
                        <img src="https://picsum.photos/600/300" alt="ByteBond Welcome Image" style="max-width: 100%; height: auto; border-radius: 10px; margin-top: 20px;">
                        <p style="margin-top: 20px;">
                            🚀 Start exploring and connecting with other developers today!
                        </p>
                        <p style="margin-top: 10px; font-size: 0.8em;">
                            ByteBond Team
                        </p>
                    </div>
                `,
            };
            console.log("Sending email" +userobj.email+" "+Email_Id+" "+Email_Pass);
            return transporter.sendMail(mailOptions);
        }
        sendWelcomeEmail(userobj.email);
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
    
            const foundUser = data.find(element => {
                return element.email === userobj.email && element.password === userobj.password;
              });
    
            if (foundUser) {
               
                return foundUser.id;
              } else {
                
                return null;
              }
        } catch (err) {
            console.log("Error in checking login in service");
            throw err;
        }
    }
    async getuserbyid(id){
        try{
            const result=await this.userRepo.getuserbyid(id);
            return result;
        }
        catch(err){
            console.log("Error in getting user by id in service")
            throw err;
        }
    }
    
}    
module.exports=userService;
