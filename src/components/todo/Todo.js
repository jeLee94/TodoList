import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { Link } from 'react-router-dom';

// import CustomBtn from '../button/button';
import './style.css';

export default function Todo(props) {
  const { todo, name, changeHandler } = props;
  // console.log(todo.id);
  //체크박스가 event.target.checked가 true임에도 해제되어있어서 임의로 name이 isDone이면 defaultChecked되도록 구현함
  //렌더링이 안돼서!!
  return (
    <div className='Box'>
      <p>
        <input
          type='checkbox'
          name={name}
          checked={todo.isDone}
          onChange={(e) => {
            changeHandler({ e, todo });
          }}
        />
        {/* Path Varialble 사용 */}
        <Link to={`/contents/${todo.id}`} className='Link'>
          {todo.title}
        </Link>
      </p>
    </div>
  );
}
