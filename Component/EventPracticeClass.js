import React, { Component } from 'react';

class EventPracticeClass extends Component {
  state = {
    message: ''
  };

  handleChange = (e) => {
    console.log(this.state.username + ': ' + this.state.message);
    this.setState({
      [e.target.name]: e.target.value
      // message: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      username: '',
      message: ''
    });
    alert(this.state.username + ': ' + this.state.message);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>초기화</button>
      </div>
    );
  }
}

export default EventPracticeClass;
