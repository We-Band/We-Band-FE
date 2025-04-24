// components/ProtectedRoute.tsx
import { useAuthStore } from '@store/auth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    // 로그인되지 않으면 onboarding 페이지로 리디렉션
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
