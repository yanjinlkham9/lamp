import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";

function App() {
  return (
    <div>
      <h2>Props 사용</h2>
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
      <ClassState></ClassState>
    </div>
  );
}

export default App;
