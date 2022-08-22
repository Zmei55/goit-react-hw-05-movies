import styled from '@emotion/styled';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  display: flex;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;

  background-color: #f5820e;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
