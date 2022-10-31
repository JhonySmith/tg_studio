import { Routes, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { CharactersPage } from 'pages/CharactersPage';
import { Page404 } from 'pages/Page404/Page404';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="*" element={<Page404 />} status={404} />
    </Routes>
  );
};
