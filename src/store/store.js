import { configureStore } from '@reduxjs/toolkit';

import charachtersReducer, {
  CHARACTERS_REDUCER,
} from './reducers/charactersReducer';

const store = configureStore({
  reducer: {
    [CHARACTERS_REDUCER]: charachtersReducer,
  },
});

export default store;
