const { User } = require("../models/userModel");

exports.userCreateController = async (req, res) => {
    const {
      fullname,
      gender,
      language,
      age,
      dateOfBirth,
      district,
      state,
      pincode,
      loginWithWay,
      verificationType,
      phoneNumber,
    } = req.body;
  
    // Check if all required fields are present
    if (
      !fullname ||
      !gender ||
      !language ||
      !district ||
      !state ||
      !pincode ||
      !loginWithWay ||
      !verificationType ||
      !phoneNumber
    ) {
      res.status(400).send({ message: "All fields are required" });
      return;
    }
  
    try {
        
      // Create a new user document
      const newUser = new User({
        fullname,
        gender,
        language,
        age:+age,
        dateOfBirth,
        district,
        state,
        pincode:+pincode,
        loginWithWay,
        verificationType,
        phoneNumber:+phoneNumber,
      });
  
      // Save the new user document
      await newUser.save();
  
      res.status(201).send({ message: "User created successfully.", user: newUser });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error creating user");
    }
  };
  