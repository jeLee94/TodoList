import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const { onClick, children } = props;

  return <StButton onClick={() => onClick(children)}>{children}</StButton>;
}

const StButton = styled.button`
  border-radius: 5px;
  border: 0px;
  background-color: #bbddc8;
  height: 40px;
  width: 120px;
  min-width: 80px;
  /* max-width: 80px; */
  margin-left: 5px;
  margin-right: 5px;
`;
