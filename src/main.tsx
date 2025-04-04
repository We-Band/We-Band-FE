import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme/theme';
import { Analytics } from '@vercel/analytics/react';

import '@styles/global/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Analytics />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
