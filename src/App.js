import React from 'react';
import Header from './components/Header';
import Home from './components/home';
import Servicios from './components/servicios';
import Contacto from './components/contacto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Servicios />
      <Contacto />
    </div>
  );
}

export default App;
