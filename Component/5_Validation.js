import React, { Component } from 'react';
import './ValidationSample.css';

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      validate: false
    };
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  onClickButton = () => {
    if (this.state.inputValue === '0000') {
      this.setState({ validate: true });
    }
  };

  render() {
    return (
      <>
        <input
          onChange={this.onChangeInput}
          value={this.state.inputValue}
          className={this.state.validate ? 'success' : 'failure'}
        ></input>
        <button onClick={this.onClickButton}>Validation</button>
      </>
    );
  }
}

export default Validation;
