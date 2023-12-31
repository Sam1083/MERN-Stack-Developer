const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:"",
    },
    message:{
        type:String,
        default:"",
    },
  
},
{timestamp:true}
)

module.exports=mongoose.model("Contact",contactSchema)