import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx1() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  //state가 하나만 변경되면 렌더링 됨, 그래서 다시 읽혀
  const func1 = () => {
    console.log("number: ", number);
  };

  const func2 = useCallback(() => {
    console.log(`number: ${number} 😊`);
  }, [number]);

  useEffect(() => {
    console.log("함수1 변경");
  }, [func1]);

  useEffect(() => {
    console.log("함수2 변경");
  }, [func2]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        Call Function
      </button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </div>
  );
}
