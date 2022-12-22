import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import jelee from './img/jelee.png';

export default function Header() {
  return (
    <StHeader>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
        <Title>
          <Image src={jelee} alt=''></Image>
          <span>JELEE's To-do List</span>
        </Title>
      </Link>
      <span>React</span>
    </StHeader>
  );
}

const StHeader = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 100px;
  font-size: 200%;
  font-weight: bold;
`;

const Image = styled.img`
  vertical-align: bottom;
  justify-content: baseline;
  height: 70px;
  background-size: cover;
  background-position: center;
  background-color: #fff6c3;
  border-radius: 100px;
`;

const Title = styled.p`
  display: flex;
  gap: 10px;
`;
