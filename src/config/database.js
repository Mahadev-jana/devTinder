const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mahadevjana:MAHADEV%40123@nasmatenode.zlgh4hj.mongodb.net/devTinder");
   
};

module.exports = connectDB;