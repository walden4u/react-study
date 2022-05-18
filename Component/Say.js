import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');

  const onClickIn = () => setMessage('환영합니다!');
  const onClickOut = () => setMessage('안녕히가세요!');
  return (
    <>
      <button onClick={onClickIn}>입장</button>
      <button onClick={onClickOut}>퇴장</button>
      <h1>{message}</h1>
    </>
  );
};

export default Say;
