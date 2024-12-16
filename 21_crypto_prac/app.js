const express = require("express");
const app = express();
const db = require("./models");
const session = require("express-session");
const PORT = 8080;

//middleware 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);
const userRouter = require("./routes");
app.use("/", userRouter);

//404 error
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
db.sequelize.sync({ force: false }).then(() => {
  console.log("DB 연결 성공");
});
