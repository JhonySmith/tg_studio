import styled from 'styled-components';

export const PagList = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  margin: 0 auto;
  margin-bottom: 20px;

  list-style-type: none;
`;

export const PagItem = styled.button`
  border: none;
  background: none;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  border: 1px solid black;
  border-radius: 50%;

  text-align: center;

  background: ${(props) => (props.isCurrent ? 'black' : 'white')};
  color: ${(props) => (props.isCurrent ? 'white' : 'black')};

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
