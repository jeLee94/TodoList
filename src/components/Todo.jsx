import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function Todo(props) {
  const { todo, name, changeHandler } = props;

  //체크박스가 event.target.checked가 true임에도 해제되어있어서 임의로 name이 isDone이면 defaultChecked되도록 구현함
  //렌더링이 안돼서!! 12/19 수정완료
  return (
    <Box>
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
        <Link
          to={`/contents/${todo.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {todo.title}
        </Link>
      </p>
    </Box>
  );
}

const Box = styled.div`
  max-width: 250px;
  min-width: 250px;
  border: 0px;
  background-color: #91ab9b;
  border-radius: 10px;
  height: 50px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  display: flex;
`;
