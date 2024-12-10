const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));
//body parser,
//세션 설정 10분 뒤 세션 종료하도록
app.get("/", (req, res) => {
  //로그인이 안된 유저 >> isLogin: false
  //로그인이 된 유저 >> {isLogin: true, user: 유자}
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// POST /login
//실제 로그인 진행
app.post("/login", (req, res) => {
  //session 연결
});
//GET /logout
app.get("/logout", (req, res) => {
  //실제 logout
  //session 삭제
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
