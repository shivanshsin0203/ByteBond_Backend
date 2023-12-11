const UserController=require("../../controllers/user-controller");

const express=require("express");
const router=express.Router();

router.post('/signin',UserController.adduser);

module.exports=router;