// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.signUp);
router.get("/signin", controller.signIn);
router.post("/signup", controller.createUser);
router.post("/signin", controller.loginUser);

module.exports = router;
