import * as S from './Pagination.styles.js';

export const Pagination = (props) => {
  const { pageCount, changePageParams, currentPage } = props;

  const getPages = () => {
    let resultPag = [];

    for (let i = 1; i < pageCount + 1; i++) {
      resultPag.push(
        <PagItem
          number={i}
          changePageParams={changePageParams}
          currentPage={currentPage}
        />
      );
    }

    return resultPag;
  };

  return <S.PagList>{getPages()}</S.PagList>;
};

const PagItem = ({ number, changePageParams, currentPage }) => {
  const clickPageHandler = () => {
    changePageParams({ page: Number(number) });
  };

  return (
    <S.PagItem onClick={clickPageHandler} isCurrent={currentPage == number}>
      {number}
    </S.PagItem>
  );
};
