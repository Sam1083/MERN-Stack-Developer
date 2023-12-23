const express=require("express")
const app=express();
const PORT=8000;
const connectDB=require("./Config/connectDb");

connectDB();


app.use("/home", (req, res) => {
    res.json({ message: "Hello from London" })
});
app.use("/products", (req, res) => {
    res.json({ message: "Hello from products page" })
});

app.listen(PORT,()=>{

  console.log(`Server is running on port ${PORT}`);

})