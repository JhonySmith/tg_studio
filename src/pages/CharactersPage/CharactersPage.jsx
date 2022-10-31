import { CharactersCardsList } from 'components/characters/CharactersCardsList/CharactersCardList';
import { Page } from 'components/Page';
import { useSearchParams } from 'react-router-dom';

export const CharactersPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const curPage = searchParams.get('page');

  const changePageParams = ({ page }) => {
    setSearchParams({ page });
  };

  return (
    <Page>
      <CharactersCardsList
        currentPage={curPage}
        changePageParams={changePageParams}
      />
    </Page>
  );
};
