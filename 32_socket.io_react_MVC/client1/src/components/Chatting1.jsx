import { useEffect, useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Chatting1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    { type: "me", content: "내가 보낸 메세지" },
    { type: "other", content: "다른 사람이이 보낸 메세지지" },
    { type: "notice", content: "입장, 퇴장 공지" },
  ]);

  useEffect(() => {
    initSocketConnect();
    //[문제점1]: newChatList를 만들때 chatList가 mount된 시점의 chatList!
    // socket.on("notice", (notice) => {
    //   const newChatList = [
    //     ...chatList, //항상 초기값값
    //     {
    //       type: "notice",
    //       content: notice,
    //     },
    //   ];
    //   setChatList(newChatList);
    // });
  }, []);

  //deer enentei adilhan bichij boloh ch ylgaag haruulah gd ingj 2bichsen
  useEffect(() => {
    //chatList가 변경될 때마다 eventhandler 재등록
    //기존 chatList가 기준이 아닌 변경된 chatList가 기준이 될 수 있도록
    //[해결1]>>>[문제점2. ]이벤트 핸들러 재등록록
    const noticeHandler = (notice) => {
      const newChatList = [
        ...chatList, //변경된 배열
        {
          type: "notice",
          content: notice,
        },
      ];
      setChatList(newChatList);
    };
    console.log("event 등록");
    socket.on("notice", noticeHandler);
    // [해결2] >>
    //cleanUp 함수는 unmount뿐먼 아니라 useEffect 가 다시 실행되기 직전에도 실행
    return () => {
      console.log("event 해제");
      socket.off("notice", noticeHandler);
    };
  }, [chatList]);

  //메세지 전송시 사용되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ul>
        <li>채팅 UI 만들기 (실습2)</li>
        <li>입장 공지 (실습3)</li>
      </ul>
      <div className="container">
        <header>코코아톡</header>
        <section>
          {chatList.map((chat, key) =>
            chat.type === "notice" ? (
              <Notice chat={chat} key={key} />
            ) : (
              <SpeechChat chat={chat} key={key} />
            )
          )}
        </section>
        <form id="msg-form" className="msg-form" onSubmit={handleSubmit}>
          <select id="dm-select"></select>
          <input
            type="text"
            placeholder="메세지"
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <button>전송</button>
        </form>
      </div>
    </>
  );
}
