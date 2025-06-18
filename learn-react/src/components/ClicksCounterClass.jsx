import React from "react";

class ClicksCounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicksCount: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ clicksCount: this.state.clicksCount + 1 });
  }

  decrement() {
    this.setState({ clicksCount: this.state.clicksCount - 1 });
  }

  render() {
    return (
      <div>
        <div>{this.state.clicksCount}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClicksCounterClass;
