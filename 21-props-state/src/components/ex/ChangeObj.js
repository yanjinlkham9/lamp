import { useState } from "react";

export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);
  console.log(props.objArr);
  const { name, age, nickName } = props.objArr[index];
  const changeM = () => {
    if (index === props.objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>nickName: {nickName}</p>
      <button onClick={changeM}>멤버 바꾸기</button>
    </div>
  );
}
