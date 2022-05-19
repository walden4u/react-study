import React, { useState } from 'react';

const EventPractice = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onClickButton = () => {
    console.log(id + ': ' + password);
    setId('');
    setPassword('');
  };

  const onKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      onClickButton();
    }
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        onChange={(e) => setId(e.target.value)}
        type="text"
        name="id"
        value={id}
        placeholder="id입력해주세요"
        onKeyPress={onKeyPressInput}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        value={password}
        placeholder="password입력해주세요"
        onKeyPress={onKeyPressInput}
      />
      <button onClick={onClickButton}>RESET</button>
    </>
  );
};

export default EventPractice;
