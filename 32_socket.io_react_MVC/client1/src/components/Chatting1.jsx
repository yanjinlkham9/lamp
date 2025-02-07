import { useState } from "react";
import "../style/chatting.css";
import Notice from "./Notice";
import SpeechChat from "./SpeechChat";
export default function Chatting1() {
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    { type: "me", content: "내가 보낸 메세지" },
    { type: "other", content: "다른 사람이이 보낸 메세지지" },
    { type: "notice", content: "입장, 퇴장 공지" },
  ]);
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
