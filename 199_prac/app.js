const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(_dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRouter = require("./routes/user");
app.user("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
