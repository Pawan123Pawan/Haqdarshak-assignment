// routes/verifyOtpRoute.js
const express = require("express");
const { generateOtp } = require("../controllers/otpController");
const router = express.Router();

router.post("/send-otp", generateOtp, (req, res) => {
  res.status(200).send({ message: "OTP sent successfully", otp: req.otp });
});

router.post("/verify-otp", (req, res) => {
  const { otp, enteredOtp } = req.body;

  if (otp !== enteredOtp) {
    return res.status(400).send("Invalid OTP");
  }

  res.status(200).send("OTP verified successfully");
});

module.exports = router;
