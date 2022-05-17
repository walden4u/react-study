import React, { useState } from 'react';

const InsertList = () => {
  const [namesData, setNamesData] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]); // 처음이름자료
  const [inputText, setInputText] = useState(''); // 입력창입력값(string)
  const [nextID, setNextID] = useState(5); // 다음번 인덱스번호(number)

  // 1	인풋값이 입력되면 화면에 표시한다.	>>
  const onChangeInput = (e) => setInputText(e.target.value); //

  // 2	클릭하면 입력값이 리스트에 추가된다.	>>
  const onClickInsert = () => {
    const nextNamesData = namesData.concat({
      id: nextID,
      name: inputText
    }); //
    setNextID(nextID + 1);
    setNamesData(nextNamesData);
    setInputText('');
  };

  const onRemove = () => {};

  // 4	보여지는 리스트 생성하기
  const makeViewList = namesData.map((name) => (
    <li key={name.id} onDoubleClick={onRemove}>
      {name.text}
    </li>
  ));
  console.log(makeViewList);

  return (
    <>
      <input onChange={onChangeInput} value={inputText}></input>
      <button onClick={onClickInsert}>추가</button>
      <li>{makeViewList}</li>
    </>
  );
};

export default InsertList;
