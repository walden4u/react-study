import React, { Component } from 'react';

class SayC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      color: 'yellow'
    };
  }

  onClickEnter = () => {
    this.setState({ message: '환영합니다!!!' });
  };
  onClickExit = () => {
    this.setState({ message: '안녕히가세요!!!' });
  };

  render() {
    return (
      <>
        <button onClick={this.onClickEnter}>입장</button>
        <button onClick={this.onClickExit}>퇴장</button>
        <div style={{ color: this.state.color }}>
          <h1>{this.state.message}</h1>
        </div>
        <br />
        <button
          onClick={() => {
            this.setState({ color: 'red' });
          }}
          style={{ color: 'red' }}
        >
          빨강
        </button>
        <button
          onClick={() => {
            this.setState({ color: 'blue' });
          }}
          style={{ color: 'blue' }}
        >
          파랑
        </button>
        <button
          onClick={() => {
            this.setState({ color: 'green' });
          }}
          style={{ color: 'green' }}
        >
          초록
        </button>
      </>
    );
  }
}

export default SayC;
