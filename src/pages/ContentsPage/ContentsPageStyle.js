import styled from 'styled-components';

export const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #345e44;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  width: 553px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  border-radius: 10px;
  background-color: #bbddc8;
`;

export const StTitle = styled.h1`
  padding: 0 24px;
`;

export const StBody = styled.main`
  padding: 0 24px;
`;

export const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #345e44;
  color: #bbddc8;
  border-radius: 12px;
  cursor: pointer;
`;
