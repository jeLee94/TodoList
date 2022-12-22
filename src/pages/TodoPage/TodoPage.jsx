/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import Form from '../../components/Form';
import Todo from '../../components/Todo';
import Header from '../../components/Header';
import {
  __getTodo,
  __setTodo,
  __updateTodo,
} from '../../redux/modules/todoSlice';

const TodoPage = () => {
  const dispatch = useDispatch();
  let { isLoading, error, todos } = useSelector((state) => state.todos);
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // input에 내용 입력시 제목 셋팅
  const onSetTodoHandler = (event) => {
    const { value } = event.target;
    if (event.target.name === 'title') setTitle(value); //제목설정
  };

  // /todo 추가 버튼
  const onSubmitTodoHandler = () => {
    let newData = {
      id: uuid(),
      title,
      contents: '',
      isDone: false,
    };
    if (title === '') {
      alert('내용을 추가해주세요.');
      return;
    } else {
      dispatch(__setTodo(newData));
      setTitle(''); //저장되어있는 제목 초기화
    }
  };

  // 상태 변경함수
  const onChangeHandler = ({ e, todo }) => {
    dispatch(__updateTodo({ id: todo.id, isDone: !todo.isDone }));
  };

  return (
    <div>
      <Header />
      <Form
        submitHandler={onSubmitTodoHandler}
        inputHandler={onSetTodoHandler}
      />

      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'baseline',
        }}
      >
        <div
          style={{
            width: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Working</h2>
          {todos.map((todo) => {
            if (!todo.isDone)
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  changeHandler={onChangeHandler}
                  name='isNotDone'
                />
              );
          })}
        </div>
        <div
          style={{
            width: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Done</h2>
          {todos.map((todo) => {
            if (todo.isDone)
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  changeHandler={onChangeHandler}
                  name='isDone'
                />
              );
          })}
        </div>
      </div>
    </div>
  );
};
export default TodoPage;
