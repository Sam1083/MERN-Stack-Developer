const express=require("express")
const app=express();
const PORT=process.env.PORT || 8000;
const connectDB=require("./Config/connectDb");
const routes=require("./routes/index")
var bodyParser = require('body-parser')
const cors=require("cors")
const dotenv=require("dotenv").config();

connectDB();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors("*"))


app.use("/api",routes);

app.use("/home", (req, res) => {
    res.json({ message: "Hello from London" })
});
app.use("/products", (req, res) => {
    res.json({ message: "Hello from products page" })
});

app.listen(PORT,()=>{

  console.log(`Server is running on port ${PORT}`);

})