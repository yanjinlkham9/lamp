import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunction1, RefFunction2 } from "./components/RefFunction";
import { LifeCycleClass } from "./components/LifecycleClass.jsx";
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
    </div>
  );
}

export default App;
