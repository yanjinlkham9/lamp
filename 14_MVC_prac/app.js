const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const loginRouter = require("./routes/login");
app.use("/", loginRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
