// import { ClassProps, ClassProps2 } from "./components/ClassProps";
// import ClassState from "./components/ClassState";
// import {
//   FunctionProps,
//   FunctionProps2,
//   FunctionProps3,
//   FunctionProps4,
// } from "./components/FunctionProps";
// import FunctionState from "./components/FunctionState";
import Emoji from "./components/ex/Emoji";
import FontColor from "./components/ex/FontColor";
import HandlerEx from "./components/ex/HandlerEx";
import Hide from "./components/ex/Hide";
import ClassStatePrac from "./components/practice/ClassStatePrac";
import FuncStatePrac from "./components/practice/FuncStatePrac";
// import { Props1 } from "./components/practice/Props1";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./Counter";
import PororoObj from "./components/ex/memberChange";
function App() {
  return (
    <div>
      {/* <h2>Props 사용</h2>
      <h3>class형 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="blue" />
      <h3>function/함수형 Component props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="오렌지" number={2} krPrice={7000} />
      <FunctionProps3 name="바나나" number={8} krPrice={5000} />
      <FunctionProps4 name="샤인머스캣" number={1} krPrice={15000}>
        <span style={{ color: "red" }}>childrennn요소입니다 </span>{" "}
      </FunctionProps4>
      <FunctionProps4 name="샤인머스캣">
        <span style={{ color: "red" }}>childrennn요소입니다 </span>{" "}
      </FunctionProps4>

      <h2>State사용</h2>
      <h3>class형 state</h3>
      <ClassState></ClassState>
      <h3>함수형 state</h3>
      <FunctionState /> */}

      <h2>Practice</h2>
      <h2>ClassStatePractice</h2>
      <ClassStatePrac />
      <h2>FunctionStatePractice</h2>
      <FuncStatePrac />
      <h2>SyntheticEvent</h2>
      <SyntheticEvent />
      <hr />
      <hr />
      <hr />
      <h2>Counter</h2>
      <Counter />

      <h2>PRACTICE</h2>
      <HandlerEx />
      <FontColor />
      <Hide />
      <Emoji />
      <PororoObj />
    </div>
  );
}

export default App;
