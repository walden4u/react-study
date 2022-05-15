import React, { Component } from 'react';

class EventPracticeClass extends Component {
  state = {
    message: ''
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {
    this.setState({
      message: ''
    });
    alert(this.state.message);
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입려개 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>초기화</button>
      </div>
    );
  }
}

export default EventPracticeClass;
