import { Component } from "react";
class ClassComp extends Component {
  render() {
    const name = "class";
    return (
      <h2 style={{ color: "blue" }} onClick={() => alert("onclicked!!")}>
        {name}
        클랴스형 컴포넌트 사용은 요렇게 합니다.
      </h2>
    );
  }
}

export default ClassComp;
