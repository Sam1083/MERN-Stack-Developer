const express=require("express")
const router=express.Router();
const controller=require("../controller/contact.controller")

router.post("/",controller.store)
router.get("/",controller.index)
router.get("/:id",controller.get)
router.delete("/:id",controller.destroy)
router.put("/:id",controller.update)




module.exports=router;