import { useResolvedPath } from 'react-router-dom';
import * as S from './HeaderMenu.styles.js';

export const HeaderMenu = () => {
  const path = useResolvedPath().pathname.replaceAll('/', '');

  return (
    <S.NavBlock>
      <S.LinksList>
        <S.LinksItem isActive={path === ''}>
          <S.LinkText to="/" isActive={path === ''}>
            Home
          </S.LinkText>
        </S.LinksItem>
        <S.LinksItem isActive={path === 'characters'}>
          <S.LinkText to="/characters/?page=1" isActive={path === 'characters'}>
            Characters
          </S.LinkText>
        </S.LinksItem>
      </S.LinksList>
    </S.NavBlock>
  );
};
