import styled from 'styled-components';

export const PopupWraper = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(33, 33, 33, 0.5);
`;
