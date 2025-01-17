import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemo1 from "./components/UseMemo1";
import { UseMemoObj } from "./components/UseMemoObj";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle.";

function App() {
  useTitle("Hoook 배워보기");
  return (
    <div className="App">
      {/* <h4>useMemo</h4>
      <UseMemo1 />
      <UseMemoObj /> */}
      <br />
      <h4>useCallback</h4>
      {/* <UseCallbackEx1 /> */}
      {/* <UseCallbackEx2 /> */}
      <h4>UseReducer</h4>
      {/* <UseReducer /> */}
      <h4 style={{ color: "blueviolet" }}>custom hook: useToggle</h4>
      <CustomHook />
      <h3>React FORM</h3>
      <Form />
    </div>
  );
}

export default App;
