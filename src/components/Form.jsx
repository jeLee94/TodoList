import React from 'react';
import styled from 'styled-components';

export default function Form(props) {
  const { submitHandler, inputHandler } = props;
  return (
    <div>
      <StForm
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
          e.target[0].value = ''; //input창 초기화
        }}
      >
        <InputArea>
          <label>TODO </label>
          <Input
            type='text'
            name='title'
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </InputArea>
        <Btn>
          <Submit type='submit' value='추가' />
        </Btn>
      </StForm>
    </div>
  );
}

const StForm = styled.form`
  background-color: #345e44;
  color: beige;
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

const InputArea = styled.p`
  padding-left: 20px;
  height: 30px;
`;

const Input = styled.input`
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

const Btn = styled.button`
  width: 250px;
  background-color: #345e44;
  border: 0;
`;
