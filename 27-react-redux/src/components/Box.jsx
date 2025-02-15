import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h1>BOX1입니다</h1>
      <Box2 />
    </div>
  );
}
export function Box2() {
  //   const state = useSelector((state) => state);
  //combineReducers의 인자로 전달했던 객체의 key ..>> isData, count
  //   console.log(state); //{isData: false, count: 1}

  //*useSelector: store에 저장돼 있는 state를 가져오기
  //*useDispatch: action을 전달하기 위한 dispatch 함수 제공
  //  -dispatch: action을 reducer에게 전달해주는 함수
  //여러개가 저장되어 있는 store에서 특정한 state만 가지고 오는 것
  const isData = useSelector((state) => state.isData);
  const count = useSelector((state) => state.count);
  console.log("count", count);
  console.log("isData", isData);
  console.log("countPlus", countPlus);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid skyblue", padding: "10px" }}>
      <h4>BOX2입니다</h4>
      <p>count: {count}</p>
      <p>isData: ({isData.toString()}) </p>
      <button onClick={() => dispatch({ type: "count/INCREMENT" })}>
        count +1
      </button>
      <button onClick={() => dispatch({ type: "count/DECREMENT" })}>
        count -1
      </button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
      <br />
      <h5>action return 함수 사용</h5>
      <button onClick={() => dispatch(countPlus())}>count +1</button>
      <button onClick={() => dispatch(countMinus())}>count -1</button>
    </div>
  );
}
