import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      ticks: 0,
      isBtnDisabled: false,
    };
  }

  incrementTicks = () => {
    let { ticks } = this.state;
    ticks++;
    this.setState({ ticks }, () => {
      if (this.state.ticks === 10) {
        this.setState({ isBtnDisabled: true });
      }
    });
  };

  render() {
    return (
      <button disabled={this.state.isBtnDisabled} onClick={this.incrementTicks}>
        {this.state.ticks}
      </button>
    );
  }
}

export default Counter;
