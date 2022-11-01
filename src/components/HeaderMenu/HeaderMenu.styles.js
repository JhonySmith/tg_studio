import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { karlaFont } from 'styles/variables/fonts';

export const NavBlock = styled.nav``;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;

  padding: 0;

  list-style-type: none;
`;

export const LinksItem = styled.li`
  margin-right: 74px;

  border-bottom: ${(props) => (props.isActive ? '1px solid white' : 'none')};

  &:last-child {
    margin-right: 0;
  }
`;

export const LinkText = styled(Link)`
  font-family: ${karlaFont};
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  color: #f6f7f9;
  text-decoration: none;

  &:hover {
    opacity: ${(props) => (props.isActive ? '1' : '0.8')};
  }

  cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};
`;
