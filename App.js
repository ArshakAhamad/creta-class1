import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import HomePage from './pages/HomePage';  // Correct default import

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* New main landing page */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/landing" element={<LandingPage />} /> {/* Original landing page */}
      </Routes>
    </HashRouter>
  );
}

export default App;
