import api from './api';

export const postKakaoLogin = async (code: string) => {
  const response = await api.post(`/auth/kakao-login`, {
    code,
  });

  return response.data;
};
