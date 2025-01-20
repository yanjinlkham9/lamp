import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Student from "./pages/Student";
import "./style/common.css";
import NotFound from "./pages/404";
import Index from "./pages";
import PracticeHeader from "./components/PracticeHeader";
function App() {
  return (
    <>
      <PracticeHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
