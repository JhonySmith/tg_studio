import { PageButton } from 'components/PageButton';
import { PageHeader } from 'components/PageHeader';
import { Page } from 'components/Page';

import * as S from './MainPage.styles';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/characters');
  };

  return (
    <S.PageBg>
      <PageHeader />
      <S.PageWraper>
        <S.PageTextWraper>
          <S.PageSlogan>Find all your favorite character</S.PageSlogan>
          <S.PageComment>
            You can find out all the information about your favorite characters
          </S.PageComment>
          <PageButton onClick={buttonClickHandler}>See more...</PageButton>
        </S.PageTextWraper>
      </S.PageWraper>
    </S.PageBg>
  );
};
