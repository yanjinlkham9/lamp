import { combineReducers } from "@reduxjs/toolkit";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankReducer } from "./module/bankReducer";

//2. store/index.js, 여러개의 reducer을 통합하는 역할
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  //만약 전역 관리 state가 추가되면 이 곳에도 추가
  bank: bankReducer,
});

//3. 내보내기
//src/index.js에서 쓰일 예정
export default rootReducer;
