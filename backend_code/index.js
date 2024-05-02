const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./config/db");
const router = require("./routes/userRoute");
const otpRotues = require("./routes/otpRoute");
require("dotenv").config();

const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// MongoDB Connection
dbConnection();

//routes

app.use("/user-database", router)
app.use("/", otpRotues)

app.get("/get",(req,res)=>{
  res.status(200).send("Welcome to the service");
})

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
