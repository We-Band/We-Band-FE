import { BrowserRouter, Route, Routes } from 'react-router';

import LiteLayout from '@layout/lite/LiteLayout';
import MainLayout from '@layout/main/MainLayout';
import Home from '@pages/Home';
import Lite from '@pages/Lite';

function App() {
  return (
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
  );
}

export default App;
