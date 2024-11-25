const express = require("express");
const app = express();
const PORT = 8080;
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const realId = "banana";
const realPw = "4321";

/* API */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// ajax GET
app.get("/ajax", (req, res) => {
  console.log(req.query);
  // res.send("응답");
  res.send(req.query);
});

//ajax POST
app.post("/ajax", (req, res) => {
  //body-parser 설정을 해야 req.body를 읽을 수 있어
  console.log(req.body);
  res.send(req.body);
});

//axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//axios POST
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//fetch 요청
// fetch GET
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send("응답 완료"); //client-s .text() 사용
  res.send(req.query); //client-s .json() 사용
});

//fetch POST
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//외부 api 사용하기
app.get("/api", (req, res) => {
  res.render("api");
});

//실습1 axios get
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

app.get("/axios-practice", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// /practice2 POST
app.post("/practice2", (req, res) => {
  console.log(req.body);
  // const { userId, userPw } = req.body;
  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
