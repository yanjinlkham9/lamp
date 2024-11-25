const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 8080;
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

/* API */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
