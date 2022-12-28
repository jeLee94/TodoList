/* eslint-disable array-callback-return */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Form from "../../components/Form";
import Todo from "../../components/Todo";
import Header from "../../components/Header";
import { __getTodo, __updateTodo } from "../../redux/modules/todoSlice";

const TodoPage = () => {
  const dispatch = useDispatch();
  let { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // 상태 변경함수
  const onChangeHandler = ({ e, todo }) => {
    dispatch(__updateTodo({ id: todo.id, isDone: !todo.isDone }));
  };

  return (
    <div>
      <Header />
      <Form />

      <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "baseline",
        }}
      >
        <div
          style={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                  name="isNotDone"
                />
              );
          })}
        </div>
        <div
          style={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                  name="isDone"
                />
              );
          })}
        </div>
      </div>
    </div>
  );
};
export default TodoPage;
