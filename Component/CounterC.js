import React, { Component } from 'react';

class CounterC extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  onClickCounter = () => {
    this.setState((prev) => {
      return { number: prev.number + 1 };
    });
    this.setState((prev) => ({ number: prev.number + 1 }));
  };

  render() {
    return (
      <>
        <div>바뀌는 값: {this.state.number}</div>
        <div>안바뀌는 값: {this.state.fixedNumber}</div>
        <button
          onClick={this.onClickCounter}
          // onClick={() => {
          //   this.setState({ number: this.state.number + 1 });
          // }}
        >
          카운터
        </button>
      </>
    );
  }
}

export default CounterC;
