/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import uuid from 'react-uuid';
import { setTodo, updateTodo } from '../redux/modules/todo';
import Form from '../components/form/form';
import Todo from '../components/todo/Todo';
import Header from '../components/header/header';

const TodoPage = () => {
  const dispatch = useDispatch();
  let { todos } = useSelector((state) => state.todo);
  // console.log(todos);
  const [title, setTitle] = useState('');
  // const [contents, setContents] = useState('');

  // input에 내용 입력시 제목 셋팅
  const onSetTodoHandler = (event) => {
    const { value } = event.target;
    if (event.target.name === 'title') setTitle(value); //제목설정
  };

  // /todo 추가 버튼
  const onSubmitTodoHandler = () => {
    if (title === '') {
      alert('내용을 추가해주세요.');
    } else {
      setTitle(''); //저장되어있는 제목, 내용 초기화
      // setContents('');
      dispatch(
        setTodo({
          id: uuid(),
          title,
          contents: '',
          isDone: false,
        })
      );
    }
  };

  // 상태 변경함수
  const onChangeHandler = ({ e, todo }) => {
    todo.isDone = !todo.isDone;
    // /todos = todos.filter((t) => t !== todo);

    dispatch(updateTodo());
  };

  return (
    <div>
      <Header />
      <Form
        submitHandler={onSubmitTodoHandler}
        inputHandler={onSetTodoHandler}
      />
      {/* <input type='checkbox' onClick={(e) => (e.target.checked = true)} /> */}
      <h2>Working</h2>

      {todos.map((todo) => {
        if (!todo.isDone)
          //false
          return (
            <Todo
              todo={todo}
              key={todo.id}
              changeHandler={onChangeHandler}
              name='isNotDone'
            />
          );
      })}
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
  );
};
export default TodoPage;
