import styled from 'styled-components';
import { karlaFont } from 'styles/variables/fonts';

export const DetailsBlock = styled.div`
  display: flex;

  background: linear-gradient(180deg, #17002f 42.19%, #1f2a63 100%);
  border-radius: 16px;
  overflow: hidden;
`;

export const DetailsIconBlock = styled.div`
  padding: 30px;

  background-color: #1f2a63;
`;

export const DetailsIcon = styled.img``;

export const DetailsStatusBlock = styled.div``;

export const DetailsStatus = styled.div``;

export const DetailsInfoBlock = styled.div`
  padding: 0 75px 25px 15px;
`;

export const DetailsName = styled.h3`
  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #fdfdfd;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

export const DetailsInfoParamsBlock = styled.div`
  padding: 15px;

  background: #fdfdfd;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
`;

export const DetailsInfoParams = styled.p`
  margin: 0;
  padding: 2px 0;

  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const RoundParamsWraper = styled.div`
  display: flex;

  margin-top: 76px;
`;

export const RoundParamBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 15px;
  padding: 8px 23px;

  background: #fdfdfd;
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 8px;
`;

export const RoundParam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35.47px;
  height: 36.6px;

  border: 3px solid #212121;
  border-radius: 50%;

  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #212121;
`;

export const RoundParamLabel = styled.div``;
