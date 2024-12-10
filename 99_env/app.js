const express = require("express");
const app = express();
console.log("db pw", process.env.DB_PASSWORD); // config() 위에서 실행 안됨
const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env);
const PORT = process.env.PORT;
console.log("PORT NUM", PORT);
console.log("db pw", process.env.DB_PASSWORD);
console.log("db name", process.env.DB_NAME);

app.get("/", (req, res) => {
  res.send("GET 요청입니다");
});

app.post("/test", (req, res) => {
  console.log(res.data);
  res.send(req.body);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
