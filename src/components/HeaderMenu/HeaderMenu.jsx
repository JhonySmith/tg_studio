import * as S from './HeaderMenu.styles.js';

export const HeaderMenu = () => {
  return (
    <S.NavBlock>
      <S.LinksList>
        <S.LinksItem>
          <S.LinkText>Home</S.LinkText>
        </S.LinksItem>
        <S.LinksItem>
          <S.LinkText>Characters</S.LinkText>
        </S.LinksItem>
      </S.LinksList>
    </S.NavBlock>
  );
};
