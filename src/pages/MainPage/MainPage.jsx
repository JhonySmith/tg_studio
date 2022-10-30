import { PageButton } from 'components/PageButton';
import { PageHeader } from 'components/PageHeader';
import * as S from './MainPage.styles';

export const MainPage = () => {
  return (
    <S.PageBg>
      <S.PageWraper>
        <PageHeader />
        <S.PageTextWraper>
          <S.PageSlogan>Find all your favorite character</S.PageSlogan>
          <S.PageComment>
            You can find out all the information about your favorite characters
          </S.PageComment>
          <PageButton>See more...</PageButton>
        </S.PageTextWraper>
      </S.PageWraper>
    </S.PageBg>
  );
};
