import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinksList = styled.ul`
  display: flex;
`;

export const LinksListItem = styled.li`
  border: 1px solid rgb(59, 59, 59);
  border-radius: 3px;
  padding: 8px 16px;
  margin-bottom: 16px;

  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const LinkRouter = styled(Link)`
  color: rgb(59, 59, 59);
  text-decoration: none;
`;
