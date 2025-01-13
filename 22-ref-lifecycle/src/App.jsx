import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import { LifeCycleClass } from "./components/LifecycleClass.jsx";
import LifeCycleFunction from "./components/LifeCycleFunction.jsx";
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
    </div>
  );
}

export default App;
