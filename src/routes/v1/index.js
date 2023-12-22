const UserController=require("../../controllers/user-controller");

const express=require("express");
const router=express.Router();

router.post('/signin',UserController.adduser);
router.get('/getalluser',UserController.getallusers);
router.post('/login',UserController.checkLogin);
router.get('/getuser/:id',UserController.getuserbyid);
router.get('/recommend/:id',UserController.recommend);
router.get('/getmessages/:id',UserController.message);
module.exports=router;