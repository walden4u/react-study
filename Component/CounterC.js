import React, { Component } from 'react';

class CounterC extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  onClickCounter = () => {
    //setState를 두번이상 적용할때는 React가 인식할수 있도록 객체가 아닌 함수로 이전값을 참조하게 해야 정상동작한다.
    this.setState(
      (prev) => {
        return { number: prev.number + 1 };
      },
      () => {
        console.log('+1 됩니다!');
      }
    );
    // 화살표 함수로 객체를 반환할때 {}를 생략하면 ()로 감싸줘야한다.
    this.setState((prev) => ({ number: prev.number + 1 }));
  };

  render() {
    return (
      <>
        <div>바뀌는 값: {this.state.number}</div>
        <div>안바뀌는 값: {this.state.fixedNumber}</div>
        <button
          onClick={this.onClickCounter}
          // onClick={() => {
          //   this.setState({ number: this.state.number + 1 });
          // }}
        >
          카운터
        </button>
      </>
    );
  }
}

export default CounterC;
