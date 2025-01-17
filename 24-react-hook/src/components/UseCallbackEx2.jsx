import { useCallback, useState } from "react";

export default function UseCallbackEx2() {
  const [text, setText] = useState("");

  //렌더링 될때마다 다시 메모리에 저장잋 되고 있다
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  //1번째 렌더링 됐을 때만 메모리에 저장됨
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <div>
      <input type="text" onChange={onChangeText} value={text} />
      <p>작성한 값: {text}</p>
    </div>
  );
}
