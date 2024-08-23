import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Datos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const vehicleData = location.state;

  const handleContinuar = () => {
    navigate('/elegir-plan'); // Redirige a la página de elegir plan
  };

  if (!vehicleData) {
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          No se encontraron datos
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Verifica tus datos
      </Typography>
      <Typography variant="body1">Placa: {vehicleData.plate}</Typography>
      <Typography variant="body1">Modelo: {vehicleData.model}</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Uso: {vehicleData.status}
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={vehicleData.mail}  // Rellenar con el valor de mail de la API
        InputProps={{
          readOnly: true,  // Hacer el campo solo de lectura si no quieres que el usuario lo edite
        }}
      />
      <TextField
        label="Documento"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={vehicleData.phone_number}  // Rellenar con el valor de phone_number de la API
        InputProps={{
          readOnly: true,  // Hacer el campo solo de lectura si no quieres que el usuario lo edite
        }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleContinuar}>
        Continuar
      </Button>
    </Box>
  );
};

export default Datos;
