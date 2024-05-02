const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnection = async () => {
  try {
   const res = await mongoose.connect(process.env.MONGODB_URI);
   if(res){
    console.log("database connection successful")
   }
  } catch (error) {
    console.log(error);
  }
};
