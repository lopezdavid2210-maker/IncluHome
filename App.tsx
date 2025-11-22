import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AccessibilityTool } from './components/AccessibilityTool';
import { Layout } from './components/Layout';
import { Role } from './types';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MonthlyReport from './pages/MonthlyReport';
import ActiveWarnings from './pages/ActiveWarnings';
import Appointments from './pages/Appointments';
import EmployeeList from './pages/EmployeeList';
import Messages from './pages/Messages';

const AppContent = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  
  const changeFontSize = (increment: number) => {
    setFontSize(prev => Math.max(12, Math.min(24, prev + increment)));
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    if (isHighContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  }, [isHighContrast, fontSize]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isHighContrast ? 'bg-black text-yellow-400' : 'bg-gray-50 text-slate-900'}`}>
      
      <Routes>
        <Route path="/" element={<Landing isHighContrast={isHighContrast} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} isHighContrast={isHighContrast} />} />
        <Route path="/register" element={<Register isHighContrast={isHighContrast} />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? (
            <Layout onLogout={handleLogout} isHighContrast={isHighContrast}>
              <Dashboard isHighContrast={isHighContrast} />
            </Layout>
          ) : <Navigate to="/login" />} 
        />
        <Route 
          path="/report" 
          element={isAuthenticated ? (
            <Layout onLogout={handleLogout} isHighContrast={isHighContrast}>
              <MonthlyReport isHighContrast={isHighContrast} />
            </Layout>
          ) : <Navigate to="/login" />} 
        />
        <Route 
          path="/warnings" 
          element={isAuthenticated ? (
            <Layout onLogout={handleLogout} isHighContrast={isHighContrast}>
              <ActiveWarnings isHighContrast={isHighContrast} />
            </Layout>
          ) : <Navigate to="/login" />} 
        />
        <Route 
          path="/appointments" 
          element={isAuthenticated ? (
            <Layout onLogout={handleLogout} isHighContrast={isHighContrast}>
              <Appointments isHighContrast={isHighContrast} />
            </Layout>
          ) : <Navigate to="/login" />} 
        />
        <Route 
          path="/employees" 
          element={isAuthenticated ? (
            <Layout onLogout={handleLogout} isHighContrast={isHighContrast}>
              <EmployeeList isHighContrast={isHighContrast} />
            </Layout>
          ) : <Navigate to="/login" />} 
        />
        <Route 
          path="/messages" 
          element={isAuthenticated ? (
            <Layout onLogout={handleLogout} isHighContrast={isHighContrast}>
              <Messages isHighContrast={isHighContrast} />
            </Layout>
          ) : <Navigate to="/login" />} 
        />
      </Routes>

      <AccessibilityTool 
        toggleHighContrast={toggleHighContrast} 
        isHighContrast={isHighContrast}
        changeFontSize={changeFontSize}
        fontSize={fontSize}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}