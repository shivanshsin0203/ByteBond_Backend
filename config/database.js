const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'/.env'});
const mongoUrl=process.env.mongoUrl
const coonect=async()=>{
    await mongoose.connect(mongoUrl)
}
module.exports=coonect;