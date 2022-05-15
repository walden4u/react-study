import React, { useState } from 'react';
import '../Component/ValidationSample.css';

const ValidationSample = () => {
  const [password, setPassword] = useState(''); // 암호입력값(string)
  const [validate, setValidate] = useState(false); // 휴요값인지여부(boolean)
  const [clicked, setClicked] = useState(false); // 클릭여부(boolean)

  // 1	인풋값이 입력되면 화면에 암호로 표시한다.
  const onChangeInput = (e) => {
    setPassword(e.target.value);
  };

  // 2	클릭해서 입력된 값이 0000인지 비교해서 input 바탕색을 바꾼다.
  const onClickValidate = () => {
    setClicked(true);
    setValidate(password === '0000');
  };

  return (
    <>
      <input
        className={clicked ? (validate ? 'success' : 'failure') : ''}
        onChange={onChangeInput}
        value={password}
        type="password"
      ></input>
      <button onClick={onClickValidate}>Validate</button>
    </>
  );
};

export default ValidationSample;
