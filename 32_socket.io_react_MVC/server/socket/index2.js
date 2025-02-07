const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  const nickInfo = [];
  //socket: 나
  //io: 모두

  io.on("connection", (socket) => {
    console.log(socket.id);
    //[Chatting1.jsx]
    //io.emit("notice", nickInfo[socket.id] + "님이 입장~!");

    //Chatting2.jsx

    //닉네임 사용2. 닉네임 중복체크 후 사용가능하면 nickInfo에 추가 (buh nickname hadgalah)
    socket.on("checkNick", (nickname) => {
      if (Object.values(nickInfo).includes(nickname)) {
        //nickname이 nickInfo에 있는 경우: 중복
        socket.emit("error", "이미 존재하는 닉네임임임");
      } else {
        //닉네임이 없는 경우: 사용 가능 닉네임임
        nickInfo[socket.id] = nickname; // {socket ID: "쓰고 싶은 닉네임", ...}
        //중복되지 않은 닉네임 client로 전달
        socket.emit("entrySuccess", nickname);
        //입장 성공시 입장 공지
        io.emit("notice", nickInfo[socket.id] + "님이 입장~!");
      }
    });
    socket.on("disconnect", () => {
      io.emit("notice", nickInfo[socket.id] + "님이 퇴장~!");
      delete nickInfo[socket.id]; //객체에서 퇴장한 닉네임을 제거
    });
  });
}

module.exports = socketHandler;
