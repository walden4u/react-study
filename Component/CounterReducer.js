import React, { useReducer } from 'react';

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREASEMENT':
      return { value: state.value + 1 };
    case 'DECREASEMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <h2>지금 현재 숫자는 {state.value} 입니다.</h2>
      <button onClick={() => dispatch({ type: 'INCREASEMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASEMENT' })}>-1</button>
    </>
  );
};

export default CounterReducer;
