import uuid from 'react-uuid';
//Action Value
const SET_TODO = 'SET_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

//Action Creator
export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

//Initial State
const initialState = {
  todos: [
    {
      id: uuid(),
      title: '리액트 투두1',
      contents: '리액트를 공부해봅시다1',
      isDone: false,
    },
    {
      id: uuid(),
      title: '리액트 투두2',
      contents: '리액트를 공부해봅시다2',
      isDone: true,
    },
  ],
};

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO: {
      console.log(state, action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: [...state.todos],
      };
    }
    case DELETE_TODO: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
//export default reducer

export default todos;
