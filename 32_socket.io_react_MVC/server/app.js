const express = require("express");
const http = require("http");
const cors = require("cors");
const PORT = 8080;
const socketHandler = require("./socket/index2"); //socket 처리 추가
const indexRouter = require("./routes");

const app = express();
const server = http.createServer(app);
socketHandler(server); //소켓으로 서버를 전달

app.use(cors());
const prefix = "/api";
app.use(prefix, indexRouter);

server.listen(PORT, () => {
  console.log("server is open. Port is", PORT);
});
