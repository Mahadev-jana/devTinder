const express=require('express')

const app=express();


app.use("/",(req,res)=>{
    res.send("Namaste Mahadev")
})

app.listen(3000,()=>{
    console.log("server is successflly listing port 3000");
})