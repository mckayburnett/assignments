import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import PublicProvider from './context/PublicProvider.js'
import './css/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PublicProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PublicProvider>
    </BrowserRouter>
  </React.StrictMode>
);

