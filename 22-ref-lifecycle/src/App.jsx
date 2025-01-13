import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import { LifeCycleClass } from "./components/LifecycleClass.jsx";
import LifeCycleFunction from "./components/LifeCycleFunction.jsx";
import Test from "./components/Test.jsx";
import FakePost from "./components/practice/FakePost.jsx";
import Container from "./components/practice/Container.jsx";
import RealPost from "./components/practice/RealPost.jsx";
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
