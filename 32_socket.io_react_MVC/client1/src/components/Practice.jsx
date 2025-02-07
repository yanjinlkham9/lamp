import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Practice() {
  const [formServerStr, setFromServerStr] = useState("");

  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();
    socket.on("bye2", (str) => {
      setFromServerStr(str);
    });
    socket.on("study2", (str) => {
      setFromServerStr(str);
    });
    socket.on("hello2", (str) => {
      setFromServerStr(str);
    });
  }, []);

  const events = ["bye", "study", "hello"];
  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName);
  };

  return (
    <>
      <h3>실습1번</h3>
      {events.map((event) => (
        <button key={event} onClick={() => emitToServer(event)}>
          {event}
        </button>
      ))}
      <h3>server: {formServerStr}</h3>
    </>
  );
}
