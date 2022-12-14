//Action Value
const SET_TODO = 'SET_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

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

//Initial State
const initialState = {
  todos: [
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
  ],
};

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO: {
      // console.log(state);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case UPDATE_TODO: {
      // console.log(state);
      state.todos.isDone = action.payload;
      return { ...state, todos: [...state.todos] };
    }
    default:
      return state;
  }
};
//export default reducer

export default todos;
