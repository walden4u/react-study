import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  const onChangeInput = (e) => dispatch(e.target);

  return (
    <>
      <input onChange={onChangeInput}></input>
      <input onChange={onChangeInput}></input>
      <h2>이름: {state.name}</h2>
      <h2>닉네임: {state.nickname}</h2>
    </>
  );
};

export default CounterReducer;
