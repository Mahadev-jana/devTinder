const express=require('express')

const app=express();

const {adminAuth}=require("./Middlewares/Auth")

app.use("/admin",adminAuth)

app.use("/admin/getAllData",(req,res)=>{
    res.send("All Data send")
})

app.listen(3000,()=>{
    console.log("server is successflly listing port 3000");
})