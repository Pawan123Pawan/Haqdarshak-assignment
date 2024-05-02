const twilio = require("twilio");
require("dotenv").config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

exports.generateOtp = (req, res, next) => {
  const otp = Math.floor(100000 + Math.random() * 900000);

  client.messages 
    .create({
      body: `Your OTP for verification is: ${otp}`,
      from: "+16813373322",
      to: req.body.phoneNumber,
    })
    .then(() => {
      req.otp = otp;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Failed to send OTP");
    });
};


