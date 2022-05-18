import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [colorName, setColorName] = useState('');

  const onClickIn = () => setMessage('환영합니다!');
  const onClickOut = () => setMessage('안녕히가세요!');

  return (
    <>
      <button onClick={onClickIn}>입장</button>
      <button onClick={onClickOut}>퇴장</button>
      <h1 style={{ color: colorName }}>{message}</h1>
      <button onClick={() => setColorName('red')} style={{ color: 'red' }}>
        빨간색
      </button>
      <button onClick={() => setColorName('green')} style={{ color: 'green' }}>
        초록색
      </button>
      <button onClick={() => setColorName('blue')} style={{ color: 'blue' }}>
        파란색
      </button>
    </>
  );
};

export default Say;
