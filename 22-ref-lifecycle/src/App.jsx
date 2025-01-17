import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import { LifeCycleClass } from "./components/LifecycleClass.jsx";
import LifeCycleFunction from "./components/LifeCycleFunction.jsx";
import Test from "./components/Test.jsx";
import FakePost from "./components/practice/FakePost.jsx";
import Container from "./components/practice/Container.jsx";
import RealPost from "./components/practice/RealPost.jsx";
import Prac1 from "./components/practice/Prac1.jsx";
import Prac2 from "./components/practice/Prac2.jsx";
import Prac3 from "./components/practice/Prac3.jsx";
function App() {
  return (
    <div className="App">
      <RefClass1 />
      <RefClass2 />
      <br />
      <RefFunction1 />
      <RefFunction2 />
      <br />
      <LifeCycleClass />
      <LifeCycleFunction />
      <Test />
      <br />
      <h3>practice lifecycle</h3>
      <Container>
        {/* <FakePost /> */}
        <RealPost />
      </Container>
      <h4>Practice1</h4>
      <Prac1 />
      <h4>Practice2</h4>
      <Prac2 />
      <Prac3 />
    </div>
  );
}

export default App;
