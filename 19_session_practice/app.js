const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));
// 세션 설정, 10분 뒤 세션 종료하도록
app.use(
  session({
    secret: "secret Key", //아무거나 써도
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.get("/", (req, res) => {
  // 로그인이 안된 유저 > {isLogin:false}
  // 로그인이 된 유저 > {isLogin:true, user:유저}
  console.log(req.session);
  console.log(req.session.user);
  if (req.session.user) {
    res.render("index", {
      user: req.session.user,
      isLogin: true,
    });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  //login 상태에서 url에 login nemj bichihed orood bgaag boliulah
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// POST /login
app.post("/login", (req, res) => {
  // 실제 로그인 진행
  // 세션 연결
  // 세션의 user라는 키를 추가하여 userId값을 value로 전달
  console.log(req.body);
  if (req.body.id === userInfo.userId && req.body.pw === userInfo.userPw) {
    // req.session.user = "session";
    req.session.user = req.body.id;
    console.log(req.session);
    res.redirect("/");
  } else {
    // res.send("repeat again");
    res.send(`
      <script>alert("아이디 또는 비밀번호가 틀렸어요, repeat again");
      document.location.href="/login"
      </script>`);
  }
});
// GET /logout
app.get("/logout", (req, res) => {
  // 실제 로그아웃 진행
  // 세션 삭제
  console.log(req.session);
  if (user) {
    //login 된 상태 >> logout 시키기
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/"); //logout 종료 후 home으로
    });
  } else {
    //login 안된 유저(session 만료된 유저, 10분후)
    res.send(`
      <script>
      alert("이미 세션이 만료되었다");
      document.location.href="/";
      </script>
      `);
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
