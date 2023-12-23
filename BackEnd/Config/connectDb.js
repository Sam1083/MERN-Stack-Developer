const mongoose=require("mongoose");


const connectDB=async()=>{

    try {
        await mongoose.connect("mongodb+srv://azeemsamiullah008:sami1083@cluster0000.6q6bjvb.mongodb.net/")
        console.log("DB Connected Successfully");

    }
    catch (err) {
        console.log(err);

    }
}

module.exports=connectDB