import { useDebounce } from 'hooks/useDebounce.js';
import { useEffect, useState } from 'react';
import * as S from './SearchBlock.styles.js';

export const SearchBlock = (props) => {
  const { searchHandler } = props;
  const [searchValue, setSearchValue] = useState('');

  const searchDeb = useDebounce(searchValue);

  useEffect(() => {
    if (searchHandler) searchHandler(searchDeb);
  }, [searchDeb, searchHandler]);

  const changeInputHandler = (evt) => {
    evt.preventDefault();
    setSearchValue(evt.target.value);
  };

  return <S.SearchInput onChange={changeInputHandler} placeholder="find..." />;
};
