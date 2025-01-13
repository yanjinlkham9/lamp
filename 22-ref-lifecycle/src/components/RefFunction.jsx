import { useRef, useState } from "react";

//DOM 요소를 선택하기 위한 ref
export function RefFunction1() {
  //1. ref 객체 만들기
  const inputRef = useRef();
  //3. ref.current에 접근해서 원하는 작업 진행
  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <div>
      <p>
        2. function 형 Component, button click시 input에 focus, disabled 처리
      </p>
      {/* 2. 선택하고 싶은 태그에 ref을 전달 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}

//변수처럼 사용하는 ref
export function RefFunction2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;
  const plusRef = () => {
    ref.current = ref.current + 1;
    console.log("ref.current:", ref.current);
  };
  const plusState = () => {
    setState(state + 1);
    console.log("state: ", state);
  };
  const plusVariable = () => {
    variable += 1;
    console.log("var: ", variable);
  };
  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVariable}>plus variable</button>
    </div>
  );
}
