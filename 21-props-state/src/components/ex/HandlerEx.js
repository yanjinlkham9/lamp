import { Component } from "react";

export default class HandlerEx extends Component {
  state = { ini: "Hello world" };
  render() {
    const { ini } = this.state;
    return (
      <div>
        <p>{ini}</p>
        <button
          onClick={() => {
            this.setState({ ini: "Goodbye World" });
          }}
        >
          클릭!
        </button>{" "}
      </div>
    );
  }
}
