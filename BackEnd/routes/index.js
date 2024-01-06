const express=require("express")
const router=express.Router();
const userRoute=require("./user.route")
const contactRoute=require("./contact.route")
const productRoute=require("./product.route")



router.use("/user",userRoute)
router.use("/contact",contactRoute)
router.use("/product",productRoute)

module.exports=router;
