const UserController=require("../../controllers/user-controller");

const express=require("express");
const router=express.Router();

router.post('/signin',UserController.adduser);
router.get('/getuser',UserController.getallusers);
router.post('/checklogin',UserController.checkLogin);
module.exports=router;