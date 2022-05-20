import React, { Component } from 'react';
import ScrollBox from '../Component/ScrollBoxC';

class AppScroll extends Component {
  scrollBoxRef = React.createRef();
  render() {
    return (
      <>
        <ScrollBox ref={this.scrollBoxRef} />
        <button onClick={() => this.scrollBoxRef.scrollToBottom()}>
          최하단으로
        </button>
      </>
    );
  }
}

export default AppScroll;
