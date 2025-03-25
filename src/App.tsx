import { BrowserRouter, Route, Routes } from 'react-router';

import LiteLayout from '@layout/lite/LiteLayout';
import MainLayout from '@layout/main/MainLayout';
import Home from '@pages/Home';
import Lite from '@pages/Lite';
import * as S from './App.styled';

function App() {
  return (
    <S.AppContainer>
      <BrowserRouter>
        <Routes>
          <Route element={<LiteLayout />}>
            <Route path="lite" element={<Lite />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </S.AppContainer>
  );
}

export default App;
