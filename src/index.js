import React from 'react';
import {useLayoutEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home.jsx';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import AddCustomGame from './pages/AddCustomGame';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const App = () => {
  return (
  <BrowserRouter>
    <Wrapper>
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
    </Wrapper>
  </BrowserRouter>
 );
}

ReactDOM.render(<App />, document.getElementById('root'));