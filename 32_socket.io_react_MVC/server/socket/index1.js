const socketIO = require("socket.io");

function socketHandler(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("test", (str) => {
      console.log("str:", str);
      socket.emit("test2", "msg 잘 받음");
    });
    socket.on("bye", (str) => {
      console.log("client: ", str);
      socket.emit("bye2", "잘가");
    });
    socket.on("study", (str) => {
      console.log("client: ", str);
      socket.emit("study2", "공부ㅎ");
    });
    socket.on("hello", (str) => {
      console.log("client: ", str);
      socket.emit("hello2", "안녕");
    });
  });
}

module.exports = socketHandler;
