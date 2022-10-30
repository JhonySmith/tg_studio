import { HeaderMenu } from 'components/HeaderMenu';
import LogoIcon from 'assets/images/logo.png';
import * as S from './PageHeader.styles.js';

export const PageHeader = () => {
  return (
    <S.HeaderWraper>
      <S.LogoLink to="/">
        <S.LogoImg src={LogoIcon} />
      </S.LogoLink>
      <HeaderMenu />
    </S.HeaderWraper>
  );
};
