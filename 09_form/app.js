//server uusgeh
const express = require("express");
const app = express();
const PORT = 8080;

// ejs views middleware 설정
app.set("view engine", "ejs"); //templete engine
app.set("views", "./views"); //viewfile 경료 설정
// buh niiteer ashglah file 관리
// app.use("/static", express.static(__dirname+"/public"))

// body.parser 설정 (post-r orj irsen body-g harah 해석하기 위해)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*요청 > 응답*/
app.get("/", function (req, res) {
  //   console.log("nodemon 실행");
  res.render("index.ejs"); //views file dtr bga file haruulna gsn ug
});

// form get 요청 | ene dood tald bichsen get bol neg API
app.get("/getForm", function (req, res) {
  // query-r orj irne
  console.log(req.query);
  //   res.send("form data get 요청 성공"); //require hsn bol zaaval send-r 종료시켜야함
  res.render("result.ejs", {
    title: "GET",
    userInfo: req.query,
  });
});
app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});

// form post 요청 hhdee ejs dtrh form method, action-toi taarah ystoi
app.post("/postForm", function (req, res) {
  // body-r orj irne
  console.log(req.body);
  //uur file ruu shiljuuleh bol zaaval render
  res.render("result.ejs", {
    title: "POST",
    userInfo: req.body,
  });
});

//실습문제
// practice1으로 들어갔을때, practice1.ejs를 화면에 보여줘야 함
// practice2으로 들어갔을때, practice2.ejs를 화면에 보여줘야 함
//practice1, practice2.ejs에는 각각 get,post를 통합 폼 요청이 있고
//결과페이지는 practice_result.ejs를 공통으로 사용
//총 4개의 API

//1./practice1에 대한 GET요청
app.get("/practice1", function (req, res) {
  console.log(req.query);
  res.render("practice/practice1.ejs");
});
//2./practice2에 대한 GET요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});
//3. 주소 지정 form GET요청

app.get("/practice3", function (req, res) {
  console.log(req.query);
  res.render("practice/practice_result.ejs", {
    userInfo: req.query,
    addInfo: false,
  });
});
//4. 주소 지정 form POST요청
app.post("/practice4", function (req, res) {
  console.log(req.body);
  res.render("practice/practice_result.ejs", {
    userInfo: req.body,
    addInfo: true,
  });
});
// 8080-r oroh servert holbogdoh
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
