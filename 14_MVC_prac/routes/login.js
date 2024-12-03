const express = require("express");
const controller = require("../controller/Clogin");
const router = express.Router();

router.get("/", controller.main);
router.post("/register", controller.register);
router.post("/register2", controller.register2);

module.exports = router;
