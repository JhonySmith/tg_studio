import { useResolvedPath } from 'react-router-dom';
import * as S from './HeaderMenu.styles.js';

export const HeaderMenu = () => {
  const path = useResolvedPath().pathname.replaceAll('/', '');

  console.log(path);

  return (
    <S.NavBlock>
      <S.LinksList>
        <S.LinksItem isActive={path === ''}>
          <S.LinkText to="/">Home</S.LinkText>
        </S.LinksItem>
        <S.LinksItem isActive={path === 'characters'}>
          <S.LinkText to="/characters/?page=1">Characters</S.LinkText>
        </S.LinksItem>
      </S.LinksList>
    </S.NavBlock>
  );
};
