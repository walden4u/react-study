import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  const onChangeInput = (e) => {
    dispatch(e.target);
  };
  return (
    <>
      <input onChange={onChangeInput} name="name" placeholder="name"></input>
      <input
        onChange={onChangeInput}
        name="nickname"
        placeholder="nickname"
      ></input>
      <h2>이름: {state.name}</h2>
      <h2>별명: {state.nickname}</h2>
    </>
  );
};

export default InfoReducer;
