import React, { useEffect, useState } from 'react';

function Info() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('마운트될 때만 실행');
    console.log({
      name,
      nickname
    });
  }, []);

  return (
    <>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        placeholder="name"
      />
      <input
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
        placeholder="nickName"
      />
      <h2>이름: {name}</h2>
      <h2>닉네임: {nickname}</h2>
    </>
  );
}

export default Info;
