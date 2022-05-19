import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');

  const onClickEnter = () => {
    setMessage('환영합니다!!!');
  };
  const onClickExit = () => {
    setMessage('안녕히가세요!!!');
  };
  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickExit}>퇴장</button>
      <div>{message}</div>
    </>
  );
};

export default Say;
