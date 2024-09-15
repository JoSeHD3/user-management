import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import UserTable from '@/components/pages/UserTable/UserTable';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserTable />
  </StrictMode>,
);
