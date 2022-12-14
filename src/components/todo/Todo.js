import React from 'react';
import CustomBtn from '../button/button';
import './style.css';

export default function Todo(props) {
  const { todo, changeHandler, deleteHandler } = props;

  return (
    <div className='Box'>
      <p>{todo.title}</p>
      <p>{todo.contents}</p>
      <p className='BtnGap'>
        <CustomBtn onClick={() => deleteHandler(todo.id)}>삭제하기</CustomBtn>
        <CustomBtn onClick={() => changeHandler(todo)}>
          {todo.isDone ? '취소' : '완료'}
        </CustomBtn>
      </p>
    </div>
  );
}
