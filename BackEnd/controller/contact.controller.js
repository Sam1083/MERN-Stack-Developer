const Contact=require("../model/contact.model")

exports.store=async(req,res)=>{
    try{
    const contact =await Contact.create(req.body)
    res.json({message:"Contact Created Successfully",status:201,success:true,contact})
}
catch(err){
    console.log(err)
}
}


exports.index=async(req,res)=>{
try{
    const contacts =await Contact.find()
    res.json({message:"User Fetched Successfully",status:200,success:true,contacts})
}
catch(err){
    console.log(err)
}
}

exports.get=async(req,res)=>{
    try{
        const contact =await Contact.findOne({_id:req.params.id})
        if(!contact){
res.json({message:"Contact not found",status:404,success:false})
        }
        res.json({message:"Contact Fetched Successfully",status:200,success:true,contact})
    }
    catch(err){
        console.log(err)
    }
    }

    exports.destroy=async(req,res)=>{
        try{
            const contact =await Contact.findOneAndDelete({_id:req.params.id})
            if(!contact){
    res.json({message:"Contact not found",status:404,success:false})
            }
            res.json({message:"Contact Deleted Successfully",status:200,success:true})
        }
        catch(err){
            console.log(err)
        }
        }

        exports.update=async(req,res)=>{
            try{
                const contact =await Contact.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                if(!user){
        res.json({message:"Contact not found",status:404,success:false})
                }
                res.json({message:"Contact Updated Successfully",status:200,success:true,contact})
            }
            catch(err){
                console.log(err)
            }
            }