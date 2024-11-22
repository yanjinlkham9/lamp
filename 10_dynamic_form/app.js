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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
