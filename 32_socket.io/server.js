const express = require("express");
const app = express();
const PORT = 8080;

//socket.io의 소켓이 httpmodule로 생성된 서버에만 동작
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

//middleware 설정
app.set("view engine", "ejs");

//api
app.get("/", (req, res) => {
  res.render("client");
});
app.get("/practice1", (req, res) => {
  res.render("client-p");
});
app.get("/chat-room", (req, res) => {
  res.render("rooms");
});
//socket code 작성
io.on("connection", (socket) => {
  //   console.log(socket);
  console.log("socket.id>>", socket.id);
  ///---- io n 전체의 소켓켓
  //[on 과 emit 사용해보기]
  //1. client>server>client
  socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log("[event_name]::", arg1, arg2, arg3);
    cb(arg1, arg2, arg3);
  });
  //2. client > server
  socket.on("cb_test", (arg, cb) => {
    console.log("cb_test>>>", arg);
    console.log(cb); // undefined
  });
  //3-1 server > client client 전전체에게
  io.emit("entire_client", "전체에게 보냅니다");
  //3-2 server > client client 하나에게게
  socket.emit("one_client", "하나의 클라이언트에게 보냅니다");
  //----채팅 만들기---------'
  // ver1. 나의 메시지가 나에게만 보임
  socket.on("new_message1", (arg, cb) => {
    console.log("new_message1>", arg);
    cb(arg); //cb으로 나에게만 데이터를 전달
  });
  // ver2. 나의 메시지가 모두에게 보이기
  socket.on("new_message2", (arg) => {
    console.log("[new_message2]::", arg);
    io.emit("message_render", arg);
  });

  //---------practice1---------------
  //   socket.on("prac", (arg, cb) => {
  //     console.log("client:", arg);
  //     cb(arg);
  //   });

  socket.on("hello", (msg, cb) => {
    console.log("client: ", msg);
    cb(msg);
  });
  socket.on("study", (msg) => {
    console.log("client: ", msg);
    socket.emit("study2", msg);
  });
  socket.on("bye", (msg) => {
    console.log("client: ", msg);
    socket.emit("bye2", msg);
  });

  //------방있는 채팅--------
  //   console.log("socket.rooms::", socket.rooms);
  // 방이 없을 때 {socket.id} 정보만 들어와있어

  socket.on("join", (roomname) => {
    //2.  서버에서  방 열기기
    //join(): 같은 방에 들어가 있는 사람들끼리 통신할 수 있도록
    socket.join(roomname); //방 열기
    socket.room = roomname; //다른곳에서도 roomname을 확인할 수 있도록 정보 추가
    // console.log("socket.rooms::", socket.rooms); // { 'gHlgueQLaKkVwz15AAAF', '1' }

    //3-1. 입장 메시지 모두에게 보내기 (server > client)
    // io.to(roomname).emit("userjoin", `[${socket.id}] 입장`);
    //3-2. 입장 메시지 나를 재외하고 보내기 (server > client)
    //broadcast: 내가 재외
    socket.broadcast.to(roomname).emit("userjoin", `[${socket.id}] 입장`);
  });

  //6. client>server: message 받아주고 전체 client에게 메세지를 보내기
  socket.on("message", (msg) => {
    console.log("clinet msg::", msg);

    //내가 포함된 room>>socket.room
    console.log("내가 포함된 방:", socket.room);
    //나 포함 전체에게 보내는 메세지 전달
    io.to(socket.room).emit("message_toAll", msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
