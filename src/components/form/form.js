import React from 'react';
import './style.css';

export default function Form(props) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const contents = e.target.contents.value;
          props.handler(title, contents);
          e.target.title.value = ''; //input창 초기화
          e.target.contents.value = ''; //input창 초기화
        }}
      >
        <p className='Input_area'>
          <label>제목 </label>
          <input type='text' name='title' />

          <label> 내용 </label>
          <input type='text' name='contents' />
        </p>
        <p className='Btn'>
          <input type='submit' value='추가' />
        </p>
      </form>
    </div>
  );
}
