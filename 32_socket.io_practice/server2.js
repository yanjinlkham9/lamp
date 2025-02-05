const express = require("express");
const app = express();
const PORT = 8080;

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client_dm");
});

const nickInfo = {};
//{socketId: nickname, ...,}
//[닉네임 사용]-2

io.on("connection", (socket) => {
  socket.on("checkNick", (nickname) => {
    console.log(nickInfo); // { oi3u8fIAHr_WnRg9AAAD: '1' }
    console.log(Object.values(nickInfo)); //[ 'a', 'b', 'c' ]
    console.log(Object.values(nickInfo).indexOf(nickname));
    if (Object.values(nickInfo).indexOf(nickname) > -1) {
      //중복되는 닉네임
      //(1)입장실패
      socket.emit("error", "이미 존재하는 닉네임입니다.");
    } else {
      //중복되지 않은 닉네임

      nickInfo[socket.id] = nickname; //현재 client nickname 정보 넣기
      //(2)내 닉네임 정보 전ㄷ달
      socket.emit("entrySuccess", nickname);
      //(3) 입장 성공, 알림이 전체에게 전달달
      socket.broadcast.emit("notice", `${nickname}님이 입장하셨습니다`);
      //(4) 입장 성공, 모두에게 전체 닉네임 정보 전달
      io.emit("updateNicks", nickInfo);
    }
  });

  //   [4-2] 메세지를 전달받고 전체에 보내기
  socket.on("send", (msg) => {
    io.emit("message", { id: nickInfo[socket.id], message: msg });
  });
  //[client 퇴장 공고]
  socket.on("disconnect", () => {
    io.emit("notice", `${nickInfo[socket.id]}님이 퇴장하셨습니다`);
    //nickInfo에 퇴장한 nickInfo[socket.id]을 삭제
    delete nickInfo[socket.id]; //객체에서 특정 데이터 삭제 구문
    console.log("deleted?", nickInfo);
    io.emit("updateNicks", nickInfo);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
