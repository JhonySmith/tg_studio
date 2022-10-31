import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWraper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 157px 3px 157px;

  background: #1f2a63;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;

export const LogoLink = styled(Link)`
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoImg = styled.img``;
