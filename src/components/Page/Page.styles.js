import styled from 'styled-components';

export const PageWraper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const FixedWraper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  flex-grow: 1;
`;
