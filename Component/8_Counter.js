import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>현재 카운터 값은 {count} 입니다.</h1>
      <button onClick={plus}>+2</button>
      <button onClick={minus}>-2</button>
    </>
  );
}

export default Counter;
