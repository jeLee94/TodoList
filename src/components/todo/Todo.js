import React from 'react';
import { Link } from 'react-router-dom';

// import CustomBtn from '../button/button';
import './style.css';

export default function Todo(props) {
  const { todo, name, changeHandler } = props;
  // console.log(todo.id);
  //체크박스가 event.target.checked가 true임에도 해제되어있어서 임의로 name이 isDone이면 defaultChecked되도록 구현함
  return (
    <div className='Box'>
      <p>
        {name === 'isDone' ? (
          <input
            type='checkbox'
            name={name}
            onClick={(e) => {
              changeHandler({ e, todo });
            }}
            defaultChecked
          />
        ) : (
          <input
            type='checkbox'
            name={name}
            onClick={(e) => {
              changeHandler({ e, todo });
            }}
          />
        )}
        {/*Path Varialble 사용*/}
        <Link to={`/contents/${todo.id}`}>{todo.title}</Link>
      </p>
    </div>
  );
}
