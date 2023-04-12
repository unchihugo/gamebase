import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home.jsx';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import AddCustomGame from './pages/AddCustomGame';


export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="AddCustomGame" element={<AddCustomGame />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
 );
}

ReactDOM.render(<App />, document.getElementById('root'));