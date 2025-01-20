import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//4. store 설정
//module/index.js에서 통합한 rootReducer을 value로 전달
const store = configureStore({ reducer: rootReducer });

//5, App component 자식 component 모두에서 사용 가능하도록
//store props로 전달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
