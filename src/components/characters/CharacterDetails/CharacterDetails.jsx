import { Gender } from 'components/Gender/Gender.jsx';
import { PopupWraper } from 'components/Popup/Popup.styles';

import HermoIcon from 'assets/images/hermo.png';
import MaleIcon from 'assets/images/male.png';
import FemaleIcon from 'assets/images/female.png';

import * as S from './CharacterDetails.styles.js';

export const CharacterDetails = (props) => {
  const { character, closeHandler } = props;
  const { name, hair_color, skin_color, eye_color, height, mass, gender } =
    character;

  return (
    <PopupWraper closeHandler={closeHandler}>
      <S.DetailsBlock>
        <S.DetailsIconBlock>
          <S.DetailsIcon src={getIcon(gender)} />
          <S.DetailsStatusBlock>
            <Gender gender={gender} />
          </S.DetailsStatusBlock>
        </S.DetailsIconBlock>
        <S.DetailsInfoBlock>
          <S.DetailsName>{name}</S.DetailsName>
          <S.DetailsInfoParamsBlock>
            <S.DetailsInfoParams>hair color: {hair_color}</S.DetailsInfoParams>
            <S.DetailsInfoParams>skin color: {skin_color}</S.DetailsInfoParams>
            <S.DetailsInfoParams>hair color: {eye_color}</S.DetailsInfoParams>
          </S.DetailsInfoParamsBlock>
          <S.RoundParamsWraper>
            <S.RoundParamBlock>
              <S.RoundParam>{height}</S.RoundParam>
              <S.RoundParamLabel>height</S.RoundParamLabel>
            </S.RoundParamBlock>
            <S.RoundParamBlock>
              <S.RoundParam>{mass}</S.RoundParam>
              <S.RoundParamLabel>mass</S.RoundParamLabel>
            </S.RoundParamBlock>
          </S.RoundParamsWraper>
        </S.DetailsInfoBlock>
      </S.DetailsBlock>
    </PopupWraper>
  );
};

const getIcon = (gender) => {
  switch (gender) {
    case 'male':
      return MaleIcon;
    case 'female':
      return FemaleIcon;
    case 'hermaphrodite':
      return HermoIcon;
    default:
      return;
  }
};
