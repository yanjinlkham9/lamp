import { useMemo, useState } from "react";

export default function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  //[useMemo 사용 전]
  //input state 변경될때도 연산이 이루어짐 > calc()호출 중
  const calc = () => {
    console.log("calc....");
    return number * 2;
  };

  //[useMemo 사용 후]
  //특정 값이 변경 되었을 때만 함수가 호출되도록
  const calc2 = useMemo(() => {
    console.log("calc2....");

    //return 이후의 number*2 값이 memoization됨
    return number * 2;
  }, [number]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <p>number: {number}</p>
      <p>calc: {calc()}</p>
      <p>calc2: {calc2}</p>
    </div>
  );
}
