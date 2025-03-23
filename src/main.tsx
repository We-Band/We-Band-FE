import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme/theme';

import '@styles/global/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
