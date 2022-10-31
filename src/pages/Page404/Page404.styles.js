import styled from 'styled-components';

import { karlaFont } from 'styles/variables/fonts';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #17002f;
`;

export const PageImg = styled.img`
  width: 70%;
`;

export const BackButton = styled(Link)`
  margin-top: 40px;
  padding: 10px 20px;

  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;

  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  text-decoration: none;

  color: #212121;
`;
