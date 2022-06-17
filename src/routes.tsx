import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Home from './pages/home';
import Login from './pages/login';

const MappedRoutes = () => {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default MappedRoutes;
