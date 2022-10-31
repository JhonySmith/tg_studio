import styled from 'styled-components';
import LoadIcon from 'assets/images/loader.svg';
import { karlaFont } from 'styles/variables/fonts';

export const CardsListBlock = styled.div`
  position: relative;

  margin-top: 20px;
`;

export const ListHeader = styled.h2`
  text-align: center;

  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;

  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  list-style-type: none;
  padding: 0;
`;

export const Loader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;

  background: url(${LoadIcon}) no-repeat center;
  background-size: 60px auto;
  background-color: rgba(0.33, 0.33, 033, 0.7);
`;
