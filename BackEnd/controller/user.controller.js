const User=require("../model/user.model")


exports.store=async(req,res)=>{
    console.log(req.body);
try{
    const user =await User.create(req.body)
    res.json({message:"User Created Successfully",status:201,success:true})
}
catch(err){
    console.log(err)
}
}