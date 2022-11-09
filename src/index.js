import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.scss';
import App from './App';

createRoot(document.querySelector('.root')).render(
  <App />
);
