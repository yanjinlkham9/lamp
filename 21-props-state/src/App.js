import { ClassProps, ClassProps2 } from "./components/ClassProps";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";

function App() {
  return (
    <div>
      <h3>class형 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="blue" />
      <h3>function/함수형 Component props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="오렌지" number={2} krPrice={7000} />
      <FunctionProps3 name="바나나" number={8} krPrice={5000} />
    </div>
  );
}

export default App;
