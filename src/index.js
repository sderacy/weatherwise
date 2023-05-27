import { render } from 'react-dom';
import React from 'react';
import './index.css';
import { ThemeProvider } from './Context/theme';
import App from './App';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
