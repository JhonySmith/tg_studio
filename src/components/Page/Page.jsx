import { PageHeader } from 'components/PageHeader/index.js';
import * as S from './Page.styles.js';

export const Page = ({ children, headerHide }) => {
  return (
    <S.PageWraper>
      {headerHide ? null : <PageHeader />}
      <S.FixedWraper>{children}</S.FixedWraper>
    </S.PageWraper>
  );
};
