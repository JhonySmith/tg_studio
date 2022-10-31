import { useEffect, useState } from 'react';

export const useDebounce = (value, delay = 500) => {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value, delay]);

  return debValue;
};
