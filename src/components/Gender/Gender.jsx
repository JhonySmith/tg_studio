import * as S from './Gender.styles.js';

export const Gender = ({ gender }) => {
  switch (gender) {
    case 'male':
      return <S.Male>male</S.Male>;
    case 'female':
      return <S.Female>female</S.Female>;
    case 'hermaphrodite':
      return <S.Hermaphrodite>hermaphrodite</S.Hermaphrodite>;
    default:
      return null;
  }
};
