import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.jsx';
import LoginFrom from './pages/LoginForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginFrom />
  </React.StrictMode>
);