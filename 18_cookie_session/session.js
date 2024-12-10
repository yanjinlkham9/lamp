const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
//session middleware
app.use(
  session({
    secret: "secret Key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000, //10min session cookie
    },
  })
);
/*  secret: "서명값", //필수값, string
    resave: session에 수정사항이 생기지 않더라도 매 요청마다 세션을 다시 정할지 >> boolean (false 권장)
    saveUninitialized: session에 저장할 내역이 않더라도 처음부터 세션을 생성할지
    cookie: {} 세션 쿠키의 대한 설정 (cookie.js의 config 참조) 
    secure: true일 때는 https에서만 세션 주고 받는다
    name: session cookie name (sessionId값 저장하는 쿠키 이름 default: connect.sid)
*/
app.get("/", (req, res) => {
  res.render("session");
});
//session 설정
app.get("/set", (req, res) => {
  //req.session.키이름 = value
  req.session.name = "lila";
  res.send("session set completed");
});

//session 확인(가져오기)
app.get("/get", (req, res) => {
  console.log(req.session);
  console.log(req.session);
  console.log(req.sessionID);
  res.send({ id: req.sessionID, name: req.session.name });
});

//session 삭제
app.get("/destroy", (req, res) => {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("session deleted completely");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
