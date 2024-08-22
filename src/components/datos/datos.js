import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Datos = () => {
  const navigate = useNavigate();

  const handleContinuar = () => {
    navigate('/elegir-plan'); // Redirige a la página de elegir plan
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Verifica tus datos
      </Typography>
      <Typography variant="body1">Placa: ABC-123</Typography>
      <Typography variant="body1">Modelo: Lamborghini</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Uso: Taxi
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Documento"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleContinuar}>
        Continuar
      </Button>
    </Box>
  );
};

export default Datos;
