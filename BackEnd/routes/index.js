const express=require("express")
const router=express.Router();
const userRoute=require("./user.route")
const contactRoute=require("./contact.route")



router.use("/user",userRoute)
router.use("/contact",contactRoute)

module.exports=router;
