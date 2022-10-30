import * as S from './PageButton.styles';

export const PageButton = ({ children, onClick }) => {
  const clickHandler = (evt) => {
    evt.preventDefault();

    onClick();
  };

  return <S.PageButton onClick={clickHandler}>{children}</S.PageButton>;
};
