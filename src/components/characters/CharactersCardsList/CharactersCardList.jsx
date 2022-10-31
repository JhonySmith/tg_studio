import { Pagination } from 'components/Pagination/Pagination.jsx';
import { SearchBlock } from 'components/SearchBlock/SearchBlock.jsx';
import { useReduxState } from 'hooks/useReduxState';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CHARACTERS_REDUCER,
  loadCharacters,
} from 'store/reducers/charactersReducer';
import { CharactersCard } from '../CharactersCard/CharactersCard.jsx';

import * as S from './CharactersCardsList.styles.js';

export const CharactersCardsList = ({ currentPage, changePageParams }) => {
  const dispatch = useDispatch();
  const { characters, charactersCount, charactersInLoad } =
    useReduxState(CHARACTERS_REDUCER);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(loadCharacters({ page: currentPage, search }));
  }, [dispatch, currentPage, search]);

  const getPages = () => {
    return Math.ceil(charactersCount / 10);
  };

  return (
    <S.CardsListBlock>
      {charactersInLoad ? <S.Loader /> : null}
      <S.ListHeader>{`${charactersCount} Peoples for you to choose your favorite`}</S.ListHeader>
      <SearchBlock searchHandler={setSearch} />
      <S.CardsList>
        {characters
          ? characters.map((character) => (
              <CharactersCard character={character} key={character.name} />
            ))
          : null}
      </S.CardsList>
      <Pagination
        pageCount={getPages()}
        currentPage={currentPage}
        changePageParams={changePageParams}
      />
    </S.CardsListBlock>
  );
};
