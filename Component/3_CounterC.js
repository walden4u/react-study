import React, { Component } from 'react';

class CounterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // onClickPlus() {
  //   this.setState({ counter: this.state.counter + 1 });
  // }
  onClickPlus = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <div>바뀌는 값:{this.state.counter}</div>
        <button onClick={this.onClickPlus.bind(this)}>+1</button>
      </>
    );
  }
}

export default CounterC;
