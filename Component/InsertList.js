import React, { useState } from "react";

const InsertList = () => {
  const [inputText, setInputText] = useState(""); // 입력창입력값(string)
  const [insertButton, setInsertButton] = useState(); // 입력버튼
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" }
  ]); // 처음이름자료
  const [nextID, setNextID] = useState(5); // 다음번 인덱스번호(number)
  // 1	인풋값이 입력되면 화면에 표시한다.	>>
  const onChangeInput = (e) => setInputText(e.target.value); //

  // 2	클릭하면 입력값이 리스트에 추가된다.	>>
  const onClickInsert = () => {}; //

  // 3	내용 리스트 생성하기
  const contextList = names.map((name) => {
    return <li key={name.id}>{name.text}</li>;
  });
  console.log(contextList);

  return (
    <>
      <input onChange={onChangeInput} value={inputText}></input>
      <button onClick={onClickInsert}>추가</button>
      <li>{contextList}</li>
    </>
  );
};

export default InsertList;
