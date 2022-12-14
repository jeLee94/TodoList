import React from 'react';
import './style.css';

export default function Form(props) {
  const { submitHandler, inputHandler } = props;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
          e.target[0].value = ''; //input창 초기화
          // e.target[1].value = ''; //input창 초기화
        }}
      >
        <p className='Input_area'>
          <label>TODO </label>
          <input
            type='text'
            name='title'
            onBlur={(e) => {
              inputHandler(e);
            }}
          />

          {/* <label> 내용 </label>
          <input type='text' name='contents' onBlur={(e) => inputHandler(e)} /> */}
        </p>
        <p className='Btn'>
          <input type='submit' value='추가' />
        </p>
      </form>
    </div>
  );
}
