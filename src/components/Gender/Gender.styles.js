import styled from 'styled-components';

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
