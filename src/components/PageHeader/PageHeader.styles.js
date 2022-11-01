import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBg = styled.div`
  width: 100%;
  background: #1f2a63;

  filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25));
`;

export const HeaderWraper = styled.header`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;

  margin: 0 auto;
  padding: 10px 157px 3px 157px;
`;

export const LogoLink = styled(Link)`
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoImg = styled.img``;
