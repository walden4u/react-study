import React, { useState, useRef } from 'react';

const IterationSample = () => {
  // const name = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = name.map((v, i) => <li key={i}>{v}</li>);
  const [names, setNames] = useState([
    { id: 1, name: '눈사람' },
    { id: 2, name: '얼음' },
    { id: 3, name: '눈' },
    { id: 4, name: '바람' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(5);
  const inputRef = useRef();

  const onRemove = (id) => {
    const nextNames = names.filter((v) => v.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((v) => {
    return (
      <li onDoubleClick={() => onRemove(v.id)} key={v.id}>
        {v.name}
      </li>
    );
  });

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickButton = () => {
    const nextNames = [...names, { id: nextId, name: inputValue }];
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputValue('');
    inputRef.current.focus();
  };

  const onKeyPressInput = (e) => {
    if (e.key === 'Enter') {
      onClickButton();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        onKeyPress={onKeyPressInput}
        onChange={onChangeInput}
        value={inputValue}
      ></input>
      <button onClick={onClickButton}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
