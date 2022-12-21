import React from 'react';
import './style.css';

export default function CustomBtn(props) {
  const { onClick, children } = props;

  return (
    <button className='CustomBtn' onClick={() => onClick(children)}>
      {children}
    </button>
  );
}
