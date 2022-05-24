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
    return this.state.isError ? (
      <h1>에러 발생했습니다.!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
