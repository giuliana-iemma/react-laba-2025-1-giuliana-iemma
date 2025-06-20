import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { TasksProvider } from './context/TasksContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>
);
