import React, { Component } from 'react';
import './ValidationSample.css';

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      validate: false,
      clicked: false
    };
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  onClickButton = () => {
    if (this.state.inputValue === '0000') {
      this.setState({
        validate: true,
        clicked: true
      });
    } else {
      this.setState({
        clicked: true
      });
    }
    this.input.focus();
  };

  render() {
    return (
      <>
        <input
          ref={(ref) => (this.input = ref)}
          onChange={this.onChangeInput}
          value={this.state.inputValue}
          className={
            this.state.clicked
              ? this.state.validate
                ? 'success'
                : 'failure'
              : null
          }
        ></input>
        <button onClick={this.onClickButton}>Validation</button>
      </>
    );
  }
}

export default Validation;
