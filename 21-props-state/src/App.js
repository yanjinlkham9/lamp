import { ClassProps, ClassProps2 } from "./components/ClassProps";

function App() {
  return (
    <div>
      <h3>class형 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="white" />
    </div>
  );
}

export default App;
