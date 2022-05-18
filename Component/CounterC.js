import React, { Component } from 'react';

class CounterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  onClickCounter = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <>
        <div>{this.state.number}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운터</button>
      </>
    );
  }
}

export default CounterC;
