import { useRef, useState } from "react";

export default function Prac2() {
  const inputRef = useRef();
  const [color, setColor] = useState("white");
  const changeColor = () => {
    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <h3>실습</h3>
      <div style={{ backgroundColor: color }}>
        <input type="text" ref={inputRef} />
        <br />
        <button onClick={changeColor}>색 적용</button>
      </div>
    </div>
  );
}
