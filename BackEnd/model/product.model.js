const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:"",
    },
    price:{
        type:String,
        default:"",
    },
    inStock:{
        type:Boolean,
        default:false
    }
  
},
{timestamp:true}
)

module.exports=mongoose.model("Products",productSchema)