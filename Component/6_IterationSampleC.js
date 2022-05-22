import React, { Component } from "react";

class IterationSampleC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        { id: 1, name: "물" },
        { id: 2, name: "바람" },
        { id: 3, name: "숲" },
        { id: 4, name: "바위" }
      ],
      inputText: "",
      nextId: 5
    };
  }

  input = React.createRef();

  onChangeInput = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onClickButton = () => {
    const nextNames = this.state.names.concat({
      id: this.state.nextId,
      name: this.state.inputText
    });
    // console.log(nextNames);
    this.setState({
      names: nextNames,
      inputText: ""
    });
    this.setState((prev) => ({
      nextId: prev.nextId + 1
    }));
    this.input.current.focus();
  };

  onKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      this.onClickButton();
    }
  };

  render() {
    const namesList = this.state.names.map((v) => (
      <li onDoubleClick={this.onRemove} key={v.id}>
        {v.name}
      </li>
    ));
    console.log("render");
    return (
      <>
        <input
          ref={this.input}
          onKeyPress={this.onKeyPressEnter}
          onChange={this.onChangeInput}
          value={this.state.inputText}
        ></input>
        <button onClick={this.onClickButton}>추가</button>
        <ul>{namesList}</ul>
      </>
    );
  }
}

export default IterationSampleC;
