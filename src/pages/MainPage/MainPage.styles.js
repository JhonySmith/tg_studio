import styled from 'styled-components';
import BgImage from 'assets/images/bg-image.png';
import { karlaFont } from 'styles/variables/fonts';

export const PageBg = styled.div`
  height: 1px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const PageWraper = styled.div`
  box-sizing: border-box;

  background: url(${BgImage}) no-repeat right 50px,
    linear-gradient(180deg, #1f2a63 0%, #17002f 100%);
  background-size: 50%, auto;

  height: 100%;
`;

export const PageTextWraper = styled.div`
  width: 500px;

  padding-top: 128px;
  margin-left: 157px;
`;

export const PageSlogan = styled.b`
  width: 500px;

  margin-top: 64px;
  margin-bottom: 64px;

  font-family: ${karlaFont};
  font-weight: 700;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  color: #ffffff;

  user-select: none;
`;

export const PageComment = styled.p`
  font-family: ${karlaFont};
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;

  color: #ffffff;

  user-select: none;
`;
