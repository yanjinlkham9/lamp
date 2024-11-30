const express = require("express");
const controller = require("../controller/Clogin");
const router = express.Router();

router.get("/", controller.main);
router.post("/register", controller.register);

module.exports = router;
