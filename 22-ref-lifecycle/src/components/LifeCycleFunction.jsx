import { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /*
useEffect(effect [,dependency_array])
-effect: callback function
-dependency_array(의존성 배열): 의존성 배열에 있는 데이터가 변하면 callback function 실행
   - []: Mount되었을 때만 동작
   - 생략: Mount, Update되었을 때 언제나 동작
   - [data]: Mount, 데이터가 Update되었을 때 동작
*/

  //Mount 시점에 실행
  useEffect(() => {
    console.log("함수형 component MOUNT~! ✨");
  }, []);
  //UnMount 시점에 실행 + (mount 시점 실행)
  useEffect(() => {
    //mount
    return () => {
      console.log("함수형 component UNMOUNT~! 🐱‍🐉"); //unmount (return dtr bichsen n l zuvhun unmount ued!!)
    };
  }, []);

  //update 시점에 실행 + mount
  useEffect(() => {
    //text, number state가 바뀔때 모두 실행됨
    console.log("함수형 component UPDATE 될때마다!"); //update/re-rendering boloh ued
  });

  //특정 state UPDATE + mount
  useEffect(() => {
    console.log("함수형 component UPDATE, text변경");
  }, [text]);

  return (
    <>
      <p>MyComponent의 숫자: {number}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
};
const LifeCycleFunction = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeNumber = () => {
    setNumber(number + 1);
  };
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunction;
