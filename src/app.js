const express = require("express");
const app = express();

const connectDB = require("./config/database");
const User=require("./models/user")

app.post("/signup",async(req,res)=>{
    //creating anew instance of user model
    const user=new User({
        firstName:"Mahadev",
        lastName:"Jana",
        emailId:"mahadevjana010@gmail.com",
        password:"Mahadev@123"
    })
  try {
    await user.save();
    res.send("user added successfully");
} catch (error) {
    res.status(500).send("Error saving user");
}
   
})




//  Start server ONLY after DB connection
connectDB()
  .then(() => {
      console.log("DB connection done");

      app.listen(3000, () => {
          console.log("Server is successfully listening on port 3000");
      });
  })
  .catch((err) => {
      console.log("Database connection failed:", err.message);
  });