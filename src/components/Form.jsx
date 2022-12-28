import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import styled from "styled-components";
import { __setTodo } from "../redux/modules/todoSlice";

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");

  const inputHandler = (e) => {
    setTitle(e.target.value);
  };

  // /todo 추가 버튼
  const onSubmitTodoHandler = (e) => {
    e.preventDefault();

    let newTodo = {
      id: uuid(),
      title,
      contents: "",
      isDone: false,
    };

    if (title === "") {
      alert("내용을 추가해주세요.");
      return;
    } else {
      dispatch(__setTodo(newTodo));
      setTitle(""); //저장되어있는 제목 초기화
    }
  };

  return (
    <FormContainer onSubmit={onSubmitTodoHandler}>
      <InputContainer>
        <InputLabel htmlFor="title">TODO</InputLabel>
        <TodoInput
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            inputHandler(e);
          }}
          value={title}
          autoFocus
          placeholder="할 일을 입력하세요."
        />
      </InputContainer>
      <TodoAddButton>
        <Submit type="submit" value="추가" />
      </TodoAddButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  background-color: #345e44;
  color: beige;

  text-align: center;
  font-size: 20px;

  display: flex;
  justify-content: space-between;

  border-radius: 10px;
`;

const InputContainer = styled.div``;

const InputLabel = styled.label``;

const TodoInput = styled.input`
  width: 295px;
  height: 30px;
  border: 0px;
`;

const Submit = styled.input`
  width: 150px;
  height: 35px;
  border-radius: 10px;
  border: 0px;
  background-color: #bbddc8;
`;

const TodoAddButton = styled.button`
  width: 250px;
  background-color: #345e44;
  border: 0;
`;
