import { useState } from "react";
export default function FontColor() {
  const [color, setColor] = useState("검정색 글씨");
  const [fontColor, setFontColor] = useState("black");
  const red = () => {
    setColor("빨간색 글씨");
    setFontColor("red");
  };
  const blue = () => {
    setColor("파란색 글씨");
    setFontColor("blue");
  };
  return (
    <div>
      <p style={{ color: fontColor }}>{color}</p>
      <button onClick={red}>Red</button>
      <button onClick={blue}>Blue</button>
    </div>
  );
}
