import React, { useState, useRef } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    id: '',
    password: ''
  });
  const { id, password } = form;
  const inputRef = useRef();

  const onChageInput = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClickButton = () => {
    console.log(id + ': ' + password);
    setForm({
      id: '',
      password: ''
    });
    inputRef.current.focus();
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
        ref={inputRef}
        onChange={onChageInput}
        type="text"
        name="id"
        value={id}
        placeholder="id입력해주세요"
        onKeyPress={onKeyPressInput}
      />
      <input
        onChange={onChageInput}
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
