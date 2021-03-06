import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      validate: false,
      clicked: false
    };
  }
  inputRef = React.createRef();

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
    this.inputRef.current.focus();
  };

  render() {
    return (
      <>
        <input
          // ref={(ref) => (this.input = ref)}
          ref={this.inputRef}
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

export default ValidationC;
