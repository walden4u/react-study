import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const fixedValue = 0;

  const onClickCounter = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <div>바뀌는 값: {counter}</div>
      <div>안바뀌는 값: {fixedValue}</div>
      <button onClick={onClickCounter}>+1</button>
    </>
  );
};

export default Counter;
