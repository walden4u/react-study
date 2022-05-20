import React from 'react';

const IterationSample = () => {
  const name = ['눈사람', '얼음', '눈', '바람'];
  const nameList = name.map((v, i) => <li key={i}>{v}</li>);

  return (
    <>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
