import { useState, useRef } from "react";

export default function Prac1() {
  const [comment, setComment] = useState([]);
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setInputTitle("");
    setInputWriter("");
  };
  const titleRef = useRef();
  const writerRef = useRef();
  const handleFocus = () => {
    if (inputTitle === "") {
      titleRef.current.focus();
      if (inputWriter === "") {
        writerRef.current.focus();
      }
    } else addComment();
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          name="writer"
          id="writer"
          ref={writerRef}
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          name="title"
          id="title"
          ref={titleRef}
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={handleFocus}>
          작성
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
