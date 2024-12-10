const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(cookieParser("secret Key"));
//TODO1: middleware 설정
const cookieConfig = {
  maxAge: 24 * 60 * 60 * 1000,
  httpOnly: true,
  signed: true,
};

app.get("/", (req, res) => {
  //   res.render("index", { popup: 쿠키값 });
  // TODO: 쿠키값 가져오기 및 index.ejs에 보내기
  res.render("index", { popup: req.signedCookies.myCookie });
});

app.post("/set-cookie", (req, res) => {
  //TODO2: 쿠키 생성하기
  res.cookie("myCookie", "hide", cookieConfig);
  res.send("쿠키 생성 성공");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
