export default function SpeechChat({ chat }) {
  //chat: {type, content}
  return (
    <>
      <div className={`speech ${chat.type}`}>
        {chat.type == "other" && <span className="nickname">nickname</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
