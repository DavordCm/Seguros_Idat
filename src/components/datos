import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function datos({ placa, onBack }) {
  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Verifica tus datos
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1" sx={{ mr: 1 }}>
          Placa:
        </Typography>
        <Typography variant="h6">{placa}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1" sx={{ mr: 1 }}>
          Modelo:
        </Typography>
        <Typography variant="h6">Lamborghini</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1" sx={{ mr: 1 }}>
          Uso:
        </Typography>
        <Typography variant="h6">Taxi</Typography>
      </Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Ingresa tus datos
      </Typography>
      <TextField label="Email" fullWidth margin="normal" required />
      <TextField label="Documento" fullWidth margin="normal" required />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="contained" color="primary">
          Continuar
        </Button>
        <Button variant="outlined" onClick={onBack}>
          Volver
        </Button>
      </Box>
    </Box>
  );
}

export default datos;
