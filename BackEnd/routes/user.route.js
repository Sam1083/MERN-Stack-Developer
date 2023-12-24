const express=require("express")
const router=express.Router();
const controller=require("../controller/user.controller")

router.post("/user",controller.store)
router.get("/user",controller.index)
router.get("/user/:id",controller.get)
router.delete("/user/:id",controller.destroy)
router.put("/user/:id",controller.update)




module.exports=router;