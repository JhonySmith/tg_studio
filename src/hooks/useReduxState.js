import { useSelector } from 'react-redux';

export const useReduxState = (reducerName) => {
  const resultStateReducer = useSelector((state) => state[reducerName]);

  return resultStateReducer;
};
