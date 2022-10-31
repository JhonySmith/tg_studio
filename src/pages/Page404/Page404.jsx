import * as S from './Page404.styles.js';
import BgImage from 'assets/images/404.png';

export const Page404 = () => {
  return (
    <S.Page>
      <S.PageImg src={BgImage} />
      <S.BackButton to="/">Return</S.BackButton>
    </S.Page>
  );
};
