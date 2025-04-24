import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LiteLayout from '@layout/lite/LiteLayout';
import MainLayout from '@layout/main/MainLayout';
import Home from '@pages/Home/Home';
import Lite from '@pages/Lite/Lite';
import * as S from './App.styled';
import Alert from '@components/alert/Alert';
import useAlertStore from '@store/alert';
import OnBoarding from '@pages/OnBoarding/OnBoarding';
import ProtectedRoute from '@components/protectedRoute/ProtectedRoute';
import Auth from '@pages/Auth/Auth';

function App() {
  const alert = useAlertStore((state) => state.alert);
  const alertMessage = useAlertStore((state) => state.alertMessage);
  const setAlert = useAlertStore((state) => state.setAlert);

  return (
    <S.AppContainer>
      <BrowserRouter>
        {alert && (
          <Alert messages={alertMessage} onClose={() => setAlert(false)} />
        )}

        <Routes>
          <Route element={<LiteLayout />}>
            <Route path="lite/*" element={<Lite />} />
          </Route>

          <Route path="onboarding" element={<OnBoarding />} />
          <Route path="/auth-callback" element={<Auth />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </S.AppContainer>
  );
}

export default App;
