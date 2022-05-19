import React, { Component } from 'react';

class CounterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      fixedValue: 0
    };
  }

  // onClickPlus() {
  //   this.setState({ counter: this.state.counter + 1 });
  // }
  onClickPlus = () => {
    //setState에 객체가 아닌 함수로 전달
    this.setState((prev) => ({ counter: prev.counter + 1 })); //객체값 리턴일 경우 ()필요함
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };

  render() {
    return (
      <>
        <div>바뀌는 값:{this.state.counter}</div>
        <div>안바뀌는 값:{this.state.fixedValue}</div>
        <button onClick={this.onClickPlus}>+1</button>
      </>
    );
  }
}

export default CounterC;
