import BasicCSS from "./components/BasicCSS";
import ModuleCSS from "./components/ModuleCSS";
import Sass from "./components/Sass";
import "./style/basic_css.css";
import StyledComponent from "./components/StyledComponent";
import Practice from "./practice/Practice1";
import LarvaPrac from "./practice/LarvaPrac";
import Ball from "./practice/Ball";
function App() {
  return (
    <div className="App">
      <h1>STYLEEEEEEEEEEEE</h1>
      <BasicCSS />
      <ModuleCSS />
      <StyledComponent />
      <Practice /> 
      <Sass />
      <LarvaPrac />
      <Ball />
    </div>
  );
}

export default App;
