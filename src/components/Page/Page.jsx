import { PageHeader } from 'components/PageHeader/index.js';
import * as S from './Page.styles.js';

export const Page = ({ children, headerHide }) => {
  return (
    <S.PageWraper>
      {headerHide ? null : <PageHeader />}
      {children}
    </S.PageWraper>
  );
};
