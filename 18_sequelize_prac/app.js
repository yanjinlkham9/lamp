const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./models");
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
// [라우터 분리]
const userRouter = require("./routes/user"); // routes안의 user.js는 파일이름 생략 불가능
app.use("/user", userRouter); // localhost:PORT/user 기본 경로

// TODO: 404 에러 처리
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then((result) => {
  console.log("DB 연결 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
