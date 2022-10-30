import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'routes/routes';

import { GlobalStyles } from 'styles/global.styles';

export const App = () => {
  const router = useRoutes();

  return (
    <BrowserRouter>
      <GlobalStyles />
      {router}
    </BrowserRouter>
  );
};
