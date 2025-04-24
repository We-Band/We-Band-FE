import { KakaoLoginResponse } from 'src/types/auth';
import api from './api';

export const postKakaoLogin = async (
  code: string,
): Promise<KakaoLoginResponse> => {
  const response = await api.post(`/auth/kakao-login`, {
    code,
  });

  console.log(response.data);

  return response.data;
};
