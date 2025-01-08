import { useState } from "react";

export default function FunctionState() {
  //ingj uurchilvul react ashglah ymar ch ashggui, vanila JS ashglasan arga
  //   let apple = "사과";
  //   const inEng = () => {
  //     const content = document.querySelector(".state");
  //     // console.log("apple가 뭐임: ", apple);
  //     content.innerHTML = " apple";
  //   };

  //2. state를 사용해서 화면을 변경
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };
  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       <button onClick={inEng2}> 영어로 변경~!~(function state)</button>
  //     </div>
  //   );

  //3.vanilla JS 사과 > apple > 사과 > apple
  //   const changeLan = () => {
  //     const content = document.querySelector(".state");
  //     if (content.innerText === "사과") {
  //       content.innerText = "apple";
  //     } else {
  //       content.innerText = "사과";
  //     }
  //   };
  //   return (
  //     <div>
  //       <div className="state">사과</div>
  //       <button onClick={changeLan}>언어 변경</button>
  //     </div>
  //   );

  //4. state값에 따라 apple> 사과> apple> ...
  const [showEnglish, setShowEnglish] = useState(true);
  const changeLang2 = () => {
    setShowEnglish(!showEnglish); //true라면 false, false라면 true로 변경
  };
  return (
    <div>
      <div className="state">{showEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLang2}>언어 변경</button>
    </div>
  );
}
