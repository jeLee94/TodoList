import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Button from '../../components/Button';
import { __deleteTodo, __updateTodo } from '../../redux/modules/todoSlice';
import * as S from './ContentsPageStyle';
import Header from '../../components/Header';

const Contents = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  let { todos } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === param.id);
  const [modify, setModify] = useState(false); //수정 완료 버튼 변경시 사용
  const [modifiedTitle, setModifiedTitle] = useState('');
  const [modifiedContents, setModifiedContents] = useState('');

  //Todo1: 삭제하면 404에러 --> 갑자기 잘됨.. 뭘 수정했지..?
  //Todo2: 체크버튼 에러 --> 처음에 !todo.isDone값만 넘기는 걸로 수정했는데 __updateTodo에 id값까지 넣어줬어야 했음
  //Todo3: 수정 에러  --> 원래 todo의 데이터에 직접접근해서 수정했는데 서버를 꼈더니 read only 객체가 돼버렸음
  // 원래 updateTodo안에 payload로 id: param.id, modifiedtitle, modifiedcontents로 넣었는데
  // 서버에서 기존 데이터에 modifiedTitle, modifiedContents 데이터가 붙어서 들어감
  // 그래서 id: parma.id, title: modifiedTitme, contents:midifiedContents로 수정했더니 됐음
  //Todo4: 스타일드 컴포넌트로 수정
  //Todo5: 최적화(useMemo) -> useMemo쓸만한 함수 안에 조건문이 들어가서 못씀
  //Todo6: 삭제할 때 window.confirm

  const onSetTodoHandler = (event) => {
    const value = event.target.value;
    if (event.target.name === 'title') setModifiedTitle(value); //제목설정
    else if (event.target.name === 'contents') {
      setModifiedContents(value); //내용설정
    }
  };

  //삭제 함수
  const onDeleteHandler = () => {
    const message = '정말 삭제하시겠습니까?';
    if (window.confirm(message)) {
      dispatch(__deleteTodo(param.id));
      navigation('/');
    } else {
      return false;
    }
  };

  // 상태 변경함수
  const onModifyHandler = (child) => {
    setModify(!modify);
    if (child === '완료') {
      dispatch(
        __updateTodo({
          id: param.id,
          title: modifiedTitle,
          contents: modifiedContents,
        })
      );
    } else {
      setModifiedTitle(todo.title);
      setModifiedContents(todo.contents);
    }
  };

  return (
    <div>
      <Header />
      <S.StContainer>
        <S.StDialog>
          <div>
            <S.StDialogHeader>
              <S.StButton onClick={() => navigation('/')}>HOME</S.StButton>
              <p>id: {todo.id.substr(0, 4)}</p>
            </S.StDialogHeader>
          </div>
          {!modify && ( //modify가 false이면 제목과 내용 보여주기
            <div>
              <S.StTitle>{todo.title}</S.StTitle>
              <S.StBody>{todo.contents}</S.StBody>
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
                  onChange={(e) => {
                    e.preventDefault();
                    onSetTodoHandler(e);
                  }}
                />
              </p>
              <p>
                <textarea
                  name='contents'
                  defaultValue={todo.contents}
                  onChange={(e) => {
                    e.preventDefault();
                    onSetTodoHandler(e);
                  }}
                ></textarea>
              </p>
            </div>
          )}
          <div>
            <Button onClick={onModifyHandler}>
              {modify ? '완료' : '수정'}
            </Button>
            <Button onClick={onDeleteHandler}>삭제</Button>
          </div>
        </S.StDialog>
      </S.StContainer>
    </div>
  );
};

export default Contents;
