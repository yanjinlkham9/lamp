import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Student from "./pages/Student";
import "./style/common.scss";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
