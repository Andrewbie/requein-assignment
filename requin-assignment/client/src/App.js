import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import GuestDashboard from './components/GuestDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="admin" element={<AdminDashboard/>} />
        <Route path="user" element={<UserDashboard/>} />
        <Route path="guest" element={<GuestDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
