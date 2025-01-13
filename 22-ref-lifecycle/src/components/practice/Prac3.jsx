import { useRef, useState } from "react";

export default function Prac3() {
  const num1 = Math.round(Math.random() * 10);
  const num2 = Math.round(Math.random() * 10);
  const operator = ["+", "-", "*"];
  const randomOp = operator[Math.floor(Math.random() * 3)];
  const inputRef = useRef();

  let answer = 0;
  if (randomOp == "+") {
    answer = num1 + num2;
  } else if (randomOp == "-") {
    answer = num1 - num2;
  } else if (randomOp == "*") {
    answer = num1 * num2;
  }
  const result = () => {
    const resultNum = Number(inputRef.current.value);
    if (resultNum === answer) {
      alert("정답입니다");
      inputRef.current.focus();
      inputRef.current.value = "";
    } else {
      alert(`오답입니다, 정답은 ${answer}입니다`);
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <h4>실습3</h4>
      <div>
        <div>
          {num1}
          {randomOp}
          {num2}
        </div>
        <input type="text" ref={inputRef} />
        <button onClick={result}>정답 제출</button>
      </div>
    </div>
  );
}
