import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import UserProvider from './context/UserProvider'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);

