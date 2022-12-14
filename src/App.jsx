/* eslint-disable array-callback-return */
// src/App.js
import React, { useState } from 'react';
import Header from './components/header/header';
import Form from './components/form/form';
import Todo from './components/todo/Todo';
import './App.css';

const App = () => {
  // /todos 수정이 필요해서 const가 아닌 let
  let [todos, setTodos] = useState([
    {
      id: Date.now(),
      title: '리액트 투두1',
      contents: '리액트를 공부해봅시다1',
      isDone: false,
    },
    {
      id: Date.now() + 1,
      title: '리액트 투두2',
      contents: '리액트를 공부해봅시다2',
      isDone: true,
    },
  ]);

  //삭제 함수
  const onDeleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  // 상태 변경함수
  const onChangeHandler = (todo) => {
    todo.isDone = !todo.isDone;
    todos = todos.filter((t) => t !== todo);
    // /todos를 여기서 바꿔줘야해서 초기값이 const가 아닌 null이다.
    setTodos([...todos, todo]);
  };

  // /todo 추가 함수
  const onSubmitHandler = (title, contents) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    if (title === '' || contents === '') alert('내용을 추가해주세요.');
    else setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <Form handler={onSubmitHandler} />

      <h2>✨working</h2>
      <div className='BoxAlign'>
        {todos.map((todo) => {
          if (!todo.isDone)
            return (
              <Todo
                todo={todo}
                key={todo.id}
                deleteHandler={onDeleteHandler}
                changeHandler={onChangeHandler}
              />
            );
        })}
      </div>
      <h2>✅Done</h2>
      <div className='BoxAlign'>
        {todos.map((todo) => {
          if (todo.isDone)
            return (
              <Todo
                todo={todo}
                key={todo.id}
                deleteHandler={onDeleteHandler}
                changeHandler={onChangeHandler}
              />
            );
        })}
      </div>
    </div>
  );
};

export default App;
