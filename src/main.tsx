import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyles from '@/lib/GlobalStyles';
import QueryProvider from '@/components/providers/QueryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <GlobalStyles />
      <App />
    </QueryProvider>
  </React.StrictMode>,
);
