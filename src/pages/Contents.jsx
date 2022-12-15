import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/modules/todo';
import { useState } from 'react';
import CustomBtn from '../components/button/button';
import styled from 'styled-components';

const Contents = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  let { todos } = useSelector((state) => state.todo);
  const todo = todos.find((todo) => todo.id === param.id);
  const [modify, setModify] = useState(false); //수정 완료 버튼 변경시 사용
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  // input 입력시 제목,내용 셋팅
  //Todo1: input창 클릭 안하고 완료하면 내용 사라지는 문제
  //Todo2: 제목만 수정시(내용은 클릭만했을때) 화면 순서 달라지는 문제
  const onSetTodoHandler = (event) => {
    const { value } = event.target;
    if (event.target.name === 'title') setTitle(value); //제목설정
    else if (event.target.name === 'contents') {
      setContents(value); //내용설정
    }
  };
  //삭제 함수
  const onDeleteHandler = () => {
    dispatch(deleteTodo(param));
    navigation('/');
  };

  // 상태 변경함수
  const onModifyHandler = (child) => {
    setModify(!modify);
    console.log(child);
    console.log(title, contents);
    if (child === '완료') {
      dispatch(updateTodo({ id: param.id, title, contents }));
      todo.contents = contents;
      todo.title = title;
    }
  };

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <StButton onClick={() => navigation('/')}>HOME</StButton>
            <p>id: {todo.id.substr(0, 4)}</p>
          </StDialogHeader>
        </div>
        {!modify && ( //modify가 false이면 제목과 내용 보여주기
          <div>
            <StTitle>{todo.title}</StTitle>
            <StBody>{todo.contents}</StBody>
          </div>
        )}

        {modify && (
          //modify가 true이면 input창 보여주기
          <div>
            <p>
              <input
                name='title'
                type='text'
                defaultValue={todo.title}
                onBlur={(e) => {
                  e.preventDefault();
                  onSetTodoHandler(e);
                }}
              />
            </p>
            <p>
              <textarea
                name='contents'
                defaultValue={todo.contents}
                onBlur={(e) => {
                  e.preventDefault();
                  onSetTodoHandler(e);
                }}
              ></textarea>
            </p>
          </div>
        )}
        <div>
          <CustomBtn onClick={onModifyHandler}>
            {modify ? '완료' : '수정'}
          </CustomBtn>
          <CustomBtn onClick={onDeleteHandler}>삭제</CustomBtn>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Contents;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #345e44;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  width: 553px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  border-radius: 10px;
  background-color: #bbddc8;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #345e44;
  color: #bbddc8;
  border-radius: 12px;
  cursor: pointer;
`;
