import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('yellow');

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
      <br />
      <div>
        <h1 style={{ color }}>{message}</h1>
      </div>
      <br />
      <button onClick={() => setColor('red')} style={{ color: 'red' }}>
        빨강
      </button>
      <button onClick={() => setColor('blue')} style={{ color: 'blue' }}>
        파랑
      </button>
      <button onClick={() => setColor('green')} style={{ color: 'green' }}>
        초록
      </button>
    </>
  );
};

export default Say;
