import { Gender } from 'components/Gender/Gender.jsx';
import { useState } from 'react';
import { CharacterDetails } from '../CharacterDetails/CharacterDetails.jsx';
import * as S from './CharactersCard.styles.js';

export const CharactersCard = (props) => {
  const { character } = props;
  const { name, mass, height, gender } = character;

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const openDetailsHandler = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const closeDetailsHandler = () => {
    setIsDetailsOpen(false);
  };

  return (
    <S.Card onClick={openDetailsHandler} role="card">
      {isDetailsOpen ? (
        <CharacterDetails
          character={character}
          closeHandler={closeDetailsHandler}
        />
      ) : null}
      <S.Name>{name}</S.Name>
      <S.RounParamBlock>
        <S.RounParamWraper>
          <S.RoundParam>{height === 'unknown' ? 'N/A' : height}</S.RoundParam>
          <S.RoundParamLabel>height</S.RoundParamLabel>
        </S.RounParamWraper>
        <S.RounParamWraper>
          <S.RoundParam>{mass === 'unknown' ? 'N/A' : mass}</S.RoundParam>
          <S.RoundParamLabel>mass</S.RoundParamLabel>
        </S.RounParamWraper>
      </S.RounParamBlock>
      <S.FooterParams>
        <Gender gender={gender} />
      </S.FooterParams>
    </S.Card>
  );
};
