import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home';
import VehiculoFrm from './components/VehiculoFrm';
import Datos from '../src/components/datos/datos';
import ElegirPlan from './components/plan/elegirPlan';
import Contacto from './components/contacto/contacto';
import Login from './components/login/login';
import Politicas from './components/politica';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === '123' && password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          {!isAuthenticated ? (
            <Route path="*" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/vehiculo" element={<VehiculoFrm />} />
              <Route path="/datos" element={<Datos />} />
              <Route path="/elegir-plan" element={<ElegirPlan />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/politica-privacidad" element={<Politicas />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
