import React, { Component } from 'react';

class EventPracticeClass extends Component {
  state = {
    message: ''
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입려개 보세요"
          value={this.state.message}
          onChange={(e) => {
            console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState({ message: '' });
            alert(this.state.message);
          }}
        >
          초기화
        </button>
      </div>
    );
  }
}

export default EventPracticeClass;
