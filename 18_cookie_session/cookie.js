const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

//ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser());

//ver2. 암호화된 쿠키
app.use(cookieParser("secret Key"));
//실제로 암호화 쿠키를 사용한다면
//비밀키도 .env로 관리하는 것이 좋다. 문자열은 아무거나 상관 없음

app.set("view engine", "ejs");

//쿠키 설정 값
const cookieConfig = {
  //maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위 ex)1000*60*5 >>5분 쿠키
  //expires: 만료 날짜, GMT 시간을 설정 ex) new Date(2024.11.9)
  //httpOnly: front에서 document.cookie로 접속하는 것을 차잔, http 통신으로 만 접근가능하게 만듦 (true/false)
  //path: '/', '/abc' (원하는 경로에서 쿠키 설정 가능)
  //secure: web browser와 server가 https으로 통신할 경우에만 쿠키 전송 (true/false)
  //signed: 쿠키 암호화 여부 (true/false)
  maxAge: 10 * 60 * 1000, //수명=10분
  httpOnly: true, ///front에서 cookie 접근 안됨
  //   signed: false, //암호화 안된 상태
  signed: true, //암호된 쿠키 (ver2)
};

const cookieConfig2 = {
  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: "/abc",
};
app.get("/abc", (req, res) => {
  res.cookie("abc-page", "abc page cookie", cookieConfig2);
  res.render("cookie-another");
});

app.get("/", (req, res) => {
  res.render("cookie");
});
//쿠키 설정
app.get("/setCookie", (req, res) => {
  //res.cookie("쿠키이름", "쿠키값", "옵션객체" )
  res.cookie("mycookie", "cookie", cookieConfig);
  //암호화된 쿠키 / 암호화되지 않은 쿠키
  //모두 res.cookie(로 쿠키 설정)
  res.send("set cookie 완료, 응답 종료");
});

//쿠키값 확인
app.get("/getCookie", (req, res) => {
  console.log(req.cookies); //{쿠키: 쿠키값}
  console.log("암호화된 쿠키", req.signedCookies);
  //   res.send(req.cookies);  //암호화 안된 쿠키
  res.send(req.signedCookies); //암호화된 쿠키
});

//쿠키 삭제
app.get("/clearCookie", (req, res) => {
  res.clearCookie("mycookie", "cookie", cookieConfig);
  res.send("clear cookie, 응답 종료");
});

app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});

/* 
ver1.  암호화되지 않았을 때
- middleware 설정 했을 때 >> app.use(cookieParser())
- 쿠키설정 >> res.cookie(쿠키이름, 쿠키값, 쿠키옵션객체)
- 쿠키 확인 >> req.cookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(쿠키이름, 쿠키값, 쿠키옵션객체)
- clearCookie(), cookie()는 응답완료를 하지 않음
   이후에 render,send, redirect, end.. 등으로 응답 완료 작업 해야 합
   - 삭제 할때 이름, 값, 옵션이 일치해야 삭제 가능!

ver2. 암호화됐을 때
- middleware 설정 했을 때 >> app.use(cookieParser("임의의 문자열"))
- 쿠키설정 >> res.cookie(쿠키이름, 쿠키값, 쿠키옵션객체)= ver1과 동일
   - 쿠키 옵션 객체의 signed 값이 true
- 쿠키 확인 >> req.signedCookies 객체에서 확인
- 쿠키 삭제 >> res.clearCookie(쿠키이름, 쿠키값, 쿠키옵션객체) = ver1과 동일
*/
