import { useState } from "react";

export default function useToggle(initialState = false) {
  //value: toggle상태
  const [value, setValue] = useState(initialState);
  //toggleValue: value를 반대값으로 전환시키는 함수
  const toggleValue = () => setValue(!value);

  //현재의 value값과ㅡ 반대전환한수를 배열에 담아서 리턴
  return [value, toggleValue];
}
