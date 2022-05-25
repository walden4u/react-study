import React, { useState, useMemo } from 'react';

const calculateAverage = (numbers) => {
  console.log('평균값 계산중');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

const Average = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickButton = () => {
    const nextNumbers = numbers.concat(parseInt(inputValue, 10));
    setNumbers(nextNumbers);
    setInputValue('');
  };

  const avg = useMemo(() => calculateAverage(numbers), [numbers]);
  const numbersList = numbers.map((v, i) => <li key={i}>{v}</li>);
  return (
    <>
      <input onChange={onChangeInput} value={inputValue} />
      <button onClick={onClickButton}>추가</button>
      <ul>{numbersList}</ul>
      <h2>평균: {avg}</h2>
    </>
  );
};

export default Average;
