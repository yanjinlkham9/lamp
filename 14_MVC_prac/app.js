const express = require("express");
const app = express();
const PORT = 8080;

//middleware 설정
app.set("view engine", "ejs");
app.set("views", "./views");
//body parser 설정 (post 요청 ued body-d orj ireed yvuulah bolohoor zaaval hj ugnu)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router
const loginRouter = require("./routes/login");
app.use("/", loginRouter);

//404설정
app.get("*", (req, res) => {
  res.send("<h2>Page not found</h2>");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
