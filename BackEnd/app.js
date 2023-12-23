const express=require("express")
const app=express();
const PORT=8000;
const connectDB=require("./Config/connectDb");
const userRoute=require("./routes/user.route")
var bodyParser = require('body-parser')

connectDB();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use("/api",userRoute);

app.use("/home", (req, res) => {
    res.json({ message: "Hello from London" })
});
app.use("/products", (req, res) => {
    res.json({ message: "Hello from products page" })
});

app.listen(PORT,()=>{

  console.log(`Server is running on port ${PORT}`);

})