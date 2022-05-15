import React, { Component } from 'react';
import '../Component/ValidationSample.css';

class ValidationSampleClass extends Component {
  state = {
    password: '',
    clicked: false,
    validate: false
  };
  input = React.createRef();

  // 1	인풋값이 입력되면 화면에 암호로 표시한다.
  onChangeInput = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  // 2	클릭해서 입력된 값이 0000인지 비교해서 input 바탕색을 바꾼다.
  onClickValidate = () => {
    this.setState({
      clicked: true,
      validate: this.state.password === '0000'
    });
    this.input.current.focus();
  };

  render() {
    const { password, clicked, validate } = this.state;
    return (
      <>
        <input
          ref={this.input}
          className={clicked ? (validate ? 'success' : 'failure') : ''}
          onChange={this.onChangeInput}
          value={password}
          type="password"
        ></input>
        <button onClick={this.onClickValidate}>Validate</button>
      </>
    );
  }
}
export default ValidationSampleClass;
