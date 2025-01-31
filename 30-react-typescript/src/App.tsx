import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Lecture from "./pages/Lecture";
import Matzip from "./pages/Matzip";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/lecture" element={<Lecture />}></Route>
        <Route path="/practice/matzip" element={<Matzip/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
