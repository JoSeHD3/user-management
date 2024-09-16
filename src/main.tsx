import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import UserTable from '@/components/pages/UserTable/UserTable';
import { Provider } from 'react-redux';
import store from './lib/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <UserTable />
    </Provider>
  </StrictMode>,
);
