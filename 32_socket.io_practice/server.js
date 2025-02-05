const express = require("express");
const app = express();
const PORT = 8080;

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

io.on("connection", (socket) => {
  console.log("connected! >>", socket.id, socket.rooms);
  //[실습3]
  socket.broadcast.emit("notice", `${socket.id}님이 입장하셨습니다`);
  //   [4-2] 메세지를 전달받고 전체에 보내기
  socket.on("send", (msg) => {
    console.log(`${socket.id}: ${msg}`);
    io.emit("message", { id: socket.id, message: msg });
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
