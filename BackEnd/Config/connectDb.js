const mongoose=require("mongoose");


const connectDB=async()=>{

    try {
        await mongoose.connect("mongodb+srv://arslan:Arslanakmal786@crud.izdbdth.mongodb.net/react18")
        console.log("DB Connected Successfully");

    }
    catch (err) {
        console.log(err);

    }
}

module.exports=connectDB