import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ isError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.isError) return <h1>에러 발생했습니다.!</h1>;
    else return this.props.children;
  }
}

export default ErrorBoundary;
