// src/components/Datos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Datos() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/elegir-plan'); 
  };

  return (
    <div>
      <h1>Verificación de Datos</h1>
      <form onSubmit={handleContinue}>
        <label>Placa: ABC-123</label>
        <br />
        <label>Email:</label>
        <input type="email" required />
        <br />
        <label>Documento:</label>
        <input type="text" required />
        <br />
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
}

export default Datos;
