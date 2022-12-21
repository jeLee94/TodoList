import React from 'react';
import './style.css';

export default function Form(props) {
  const { submitHandler, inputHandler } = props;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
          e.target[0].value = ''; //input창 초기화
        }}
      >
        <p className='Input_area'>
          <label>TODO </label>
          <input
            type='text'
            name='title'
            onChange={(e) => {
              console.log(e);
              inputHandler(e);
            }}
          />
        </p>
        <p className='Btn'>
          <input type='submit' value='추가' />
        </p>
      </form>
    </div>
  );
}
