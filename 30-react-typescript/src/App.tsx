import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Lecture from "./pages/Lecture";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/lecture" element={<Lecture />}></Route>
      </Routes>
    </div>
  );
}

export default App;
