import styled from '@emotion/styled';

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0px;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
