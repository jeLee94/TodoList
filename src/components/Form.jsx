import React from "react";
import styled from "styled-components";

export default function Form(props) {
  const { submitHandler, inputHandler } = props;
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(e);
        e.target[0].value = ""; //input창 초기화
      }}
    >
      <InputContainer>
        <InputLabel htmlFor="title">TODO</InputLabel>
        <TodoInput
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            inputHandler(e);
          }}
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
