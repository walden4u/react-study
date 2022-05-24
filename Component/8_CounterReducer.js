import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return { value: state.value + 1 };
    case 'MINUS':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <h2>현재 카운터 값은 {state.value} 입니다. </h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>+1</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-1</button>
    </>
  );
};

export default CounterReducer;
