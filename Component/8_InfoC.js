import React, { Component } from 'react';

class InfoC extends Component {
  state = {
    name: '',
    nickname: ''
  };

  render() {
    return (
      <>
        <input
          onChange={(e) => this.setState(e.target.value)}
          value={this.name}
          placeholder="name"
        ></input>
        <input
          onChange={(e) => this.setState(e.target.value)}
          value={this.nickname}
          placeholder="nickname"
        ></input>
        <h2>이름: {this.name}</h2>
        <h2>별명: {this.nickname}</h2>
      </>
    );
  }
}

export default InfoC;
