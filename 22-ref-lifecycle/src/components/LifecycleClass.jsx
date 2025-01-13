import { Component } from "react";

class MyComponent extends Component {
  //mount되었을 때
  componentDidMount() {
    console.log("mount 되었어요");
  }
  //update되었을 때
  componentDidUpdate() {
    console.log("update 되었어요");
  }
  //unmount 되기 직전
  componentWillUnmount() {
    console.log("unmount 됩니다");
  }
  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}

export class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>Plus state</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
