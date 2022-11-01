import styled from 'styled-components';
import { karlaFont } from 'styles/variables/fonts';

export const Card = styled.li`
  box-sizing: border-box;

  width: 351.9px;
  padding: 6px 26px;

  background: #f0f0f0;
  border-radius: 8px;

  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

export const Name = styled.p`
  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

export const RounParamBlock = styled.div`
  display: flex;
`;

export const RounParamWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 13px;
`;

export const RoundParam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 37.95px;
  height: 36.04px;

  border: 3px solid #212121;
  border-radius: 50%;
`;

export const RoundParamLabel = styled.span`
  margin-top: 5px;

  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #4b4b4b;
`;

export const ColorBlock = styled.div`
  width: fit-content;
  padding: 2px 10px;

  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #212121;
`;

export const Male = styled(ColorBlock)`
  background: #73d677;
`;

export const Female = styled(ColorBlock)`
  background: #c956ff;
`;

export const Hermaphrodite = styled(ColorBlock)`
  background: #f5db13;
`;

export const FooterParams = styled.div`
  margin-top: 10px;
`;
