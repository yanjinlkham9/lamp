import { useState } from "react";

export default function Hide() {
  const [hideText, setHideText] = useState(true);
  const showText = () => {
    setHideText(!hideText);
  };
  return (
    <div>
      <button onClick={showText}>{hideText ? "보여주라" : "사라져라"}</button>
      <div className="state">{hideText ? " " : "안녕하세요"}</div>
    </div>
  );
}
