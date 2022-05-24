import React, { Component } from 'react';

class CounterC extends Component {
  state = {
    count: 0
  };

  plus = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  minus = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <>
        <h1>현재 카운터 값은 {this.state.count} 입니다!</h1>
        <button onClick={this.plus}>+2</button>
        <button onClick={this.minus}>-2</button>
      </>
    );
  }
}

export default CounterC;
