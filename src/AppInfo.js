import React, { useState } from 'react';
import Info from '../Component/8_Info';

const AppInfo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </>
  );
};

export default AppInfo;
