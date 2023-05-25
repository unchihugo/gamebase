import React from 'react';
import {useLayoutEffect} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home.jsx';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import AddCustomGame from './pages/AddCustomGame';
import Library from './pages/Library';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';

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
          <Route index element={<Navigate to ="/landing"/>} />
          <Route path="landing" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="AddCustomGame" element={<AddCustomGame />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users/:userId" element={<UserPage />} />
        </Route>
      </Routes>
    </Wrapper>
  </BrowserRouter>
 );
}

ReactDOM.render(<App />, document.getElementById('root'));