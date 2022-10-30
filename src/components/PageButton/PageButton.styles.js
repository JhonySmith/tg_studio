import styled from 'styled-components';
import { karlaFont } from 'styles/variables/fonts';

export const PageButton = styled.button`
  padding: 20px 57px;

  background: #ffc107;
  border: none;
  border-radius: 11px;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);

  font-family: ${karlaFont};
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;
