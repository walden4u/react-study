import React, { Component } from 'react';

class InfoC extends Component {
  state = {
    name: '',
    nickname: ''
  };

  render() {
    const { name, nickname } = this.state;
    console.log('render');
    return (
      <>
        <input
          onChange={(e) => this.setState({ name: e.target.value })}
          value={name}
          placeholder="name"
        ></input>
        <input
          onChange={(e) => this.setState({ nickname: e.target.value })}
          value={nickname}
          placeholder="nickname"
        ></input>
        <h2>이름: {name}</h2>
        <h2>별명: {nickname}</h2>
      </>
    );
  }
}

export default InfoC;
