const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/login", controller.login);
router.get("/register", controller.register);
router.post("/register", controller.post_register);
router.post("/login", controller.post_login);
module.exports = router;
