import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//데이터읽기
export const __getTodo = createAsyncThunk(
  'todos/getTodo',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3001/todos');
      return data.data && thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터추가
export const __setTodo = createAsyncThunk(
  'todos/setTodo',
  async (payload, thunkAPI) => {
    try {
      await axios.post('http://localhost:3001/todos', payload);
      const data = await axios.get('http://localhost:3001/todos');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터변경
export const __updateTodo = createAsyncThunk(
  'todos/setTodo',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${payload.id}`, payload);
      const data = await axios.get('http://localhost:3001/todos');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터 삭제
export const __deleteTodo = createAsyncThunk(
  'todos/setTodo',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${payload}`);
      const data = await axios.get('http://localhost:3001/todos');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      state.todos = [...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__setTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__setTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__setTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__updateTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__updateTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__updateTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { setTodo, updateTodo, deleteTodo } = todos.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todos.reducer;
