import React, { Component } from 'react';

class EventPracticeC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: ''
    };
  }

  inputRef = React.createRef();

  onChangeInput = (e) => {
    // console.log(e.target.name);
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickButton = () => {
    this.setState({ id: '', password: '' });
    console.log(this.state.id + ': ' + this.state.password);
    this.inputRef.current.focus();
  };

  onKeyInput = (e) => {
    if (e.key === 'Enter') this.onClickButton();
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          ref={this.inputRef}
          onChange={this.onChangeInput}
          onKeyPress={this.onKeyInput}
          value={this.state.id}
          type="text"
          name="id"
          placeholder="id입력해주세요"
        ></input>
        <input
          onChange={this.onChangeInput}
          onKeyPress={this.onKeyInput}
          value={this.state.password}
          type="password"
          name="password"
          placeholder="password입력해주세요"
        ></input>
        <button onClick={this.onClickButton}>reset</button>
      </>
    );
  }
}

export default EventPracticeC;
