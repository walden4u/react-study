import React, { useState, useRef } from 'react';
import './ValidationSample.css';

const Validation = () => {
  const [inputValue, setInputValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [validation, setValidation] = useState(false);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickButton = () => {
    if (inputValue === '0000') {
      setValidation(true);
      setClicked(true);
    } else {
      setValidation(false);
      setClicked(true);
    }
    inputRef.current.focus();
  };

  const onKeyPressButton = (e) => {
    if (e.key === 'Enter') {
      onClickButton();
    }
  };

  return (
    <>
      <input
        onKeyPress={onKeyPressButton}
        ref={inputRef}
        className={clicked ? (validation ? 'success' : 'failure') : null}
        onChange={onChangeInput}
        value={inputValue}
      ></input>
      <button onClick={onClickButton}>확인</button>
    </>
  );
};

export default Validation;
