const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");
//GET /user
router.get("/", controller.getUser);

//GET /user/aa
// router.get('/aa', controller.a)

//POST /user/login
// router.post('/login', controller.login)

//module 내보내기
module.exports = router;
