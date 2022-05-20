import React, { useState } from 'react';

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

  const namesList = names.map((v) => {
    return <li key={v.id}>{v.name}</li>;
  });

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input onChange={onChangeInput} value={inputValue}></input>
      <button>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
