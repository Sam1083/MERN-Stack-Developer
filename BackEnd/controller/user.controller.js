const User=require("../model/user.model")
var bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken")

exports.store=async(req,res)=>{
    const {password}=req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password=hashedPassword;
    const user =await User.create(req.body)
    res.json({message:"User Created Successfully",status:201,success:true,user})
}
catch(err){
    console.log(err)
}
}

exports.login=async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(!user){
          return  res.json({status:404,message:"User not found",success:false})
        }
        const passwordMatch=await bcrypt.compare(req.body.password,user.password);
     
       if(passwordMatch){
        var token = jwt.sign({_id:user.id }, process.env.JWT_SECRET);
        
        return res.json({success:true,message:"Password matches",status:200,token})
       }
       else{
        return res.json({success:false,message:"Password does not  matches",status:400})
       }
    }
    catch(err){
       return console.log(err)
    }
}


exports.index=async(req,res)=>{
try{
    const users =await User.find()
    res.json({message:"User Fetched Successfully",status:200,success:true,users})
}
catch(err){
    console.log(err)
}
}

exports.get=async(req,res)=>{
    try{
        const user =await User.findOne({_id:req.params.id})
        if(!user){
res.json({message:"User not found",status:404,success:false})
        }
        res.json({message:"User Fetched Successfully",status:200,success:true,user})
    }
    catch(err){
        console.log(err)
    }
    }

    exports.destroy=async(req,res)=>{
        try{
            const user =await User.findOneAndDelete({_id:req.params.id})
            if(!user){
    res.json({message:"User not found",status:404,success:false})
            }
            res.json({message:"User Deleted Successfully",status:200,success:true})
        }
        catch(err){
            console.log(err)
        }
        }

        exports.update=async(req,res)=>{
            try{
                const user =await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                if(!user){
        res.json({message:"User not found",status:404,success:false})
                }
                res.json({message:"User Updated Successfully",status:200,success:true,user})
            }
            catch(err){
                console.log(err)
            }
            }