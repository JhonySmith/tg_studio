import { createSlice } from '@reduxjs/toolkit';

export const CHARACTERS_REDUCER = 'charachtersReducer';

const initialState = {
  characters: [],
  next: 1,
  previus: 1,
  charactersCount: 0,
  charactersInLoad: false,
  charactersLoadError: null,
};

const charactersProcess = createSlice({
  name: 'charactersProcess',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setPrevius: (state, action) => {
      state.previus = action.payload;
    },
    setNext: (state, action) => {
      state.next = action.payload;
    },
    setCharactersCount: (state, action) => {
      state.charactersCount = action.payload;
    },
    setCharactersinLoad: (state, action) => {
      state.charactersInLoad = action.payload;
    },
    setCharactersLoadError: (state, action) => {
      state.charactersLoadError = action.payload;
    },
  },
});

export const loadCharacters = (
  { page, search } = { page: 1, search: null }
) => {
  return (dispatch) => {
    dispatch(setCharactersinLoad(true));

    fetch(
      `https://swapi.dev/api/people/?page=${page || 1}${
        search ? `&search=${search}` : ''
      } `
    )
      .then((res) => res.json())
      .then((res) => {
        const { results, count, next, previus } = res;
        dispatch(setCharacters(results));
        dispatch(setNext(next));
        dispatch(setPrevius(previus));
        dispatch(setCharactersCount(count));
        dispatch(setCharactersinLoad(false));
      });
  };
};

const { actions, reducer } = charactersProcess;
const {
  setCharacters,
  setNext,
  setPrevius,
  setCharactersCount,
  setCharactersinLoad,
  setCharactersLoadError,
} = actions;

export default reducer;
