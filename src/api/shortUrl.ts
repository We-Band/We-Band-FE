import axios from 'axios';

interface ShortUrlRequest {
  url: string;
}

interface ShortUrlResponse {
  result: string;
}

export async function getShortUrl(url: string): Promise<ShortUrlResponse> {
  const response = await axios.post<ShortUrlResponse>(
    'https://api.lrl.kr/v6/short',
    { url } as ShortUrlRequest,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_SHORT_URL_API_KEY,
      },
    },
  );

  return response.data;
}
