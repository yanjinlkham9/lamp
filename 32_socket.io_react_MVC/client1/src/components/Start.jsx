import { useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Start() {
  const initSocketConnect = () => {
    // console.log(socket.connected);
    if (!socket.connected) socket.connect(); //소켓과 접속
  };
  useEffect(() => {
    initSocketConnect();

    socket.emit("test", "테스트");
    socket.on("test2", (msg) => {
      console.log("message::", msg);
    });
  }, []);
  return <p>소켓 연결테스트입니다</p>;
}
