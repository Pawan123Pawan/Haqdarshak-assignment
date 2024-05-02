const express = require("express");
const { userCreateController } = require("../controllers/userController");


const router = express.Router();

router.post("/user", userCreateController);


// Export router
module.exports = router;
