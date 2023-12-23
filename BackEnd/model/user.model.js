const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:"",
        require:true
    },
    password:{
        type:String,
        default:"",
        require:true
    },
    phone:{
        type:String,
        default:""
    }
},
{timestamp:true}
)

module.exports=mongoose.model("User",userSchema)