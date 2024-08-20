import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VehiculoFrm = () => {
  const [showOffers, setShowOffers] = useState(false);
  const [placa, setPlaca] = useState('');
  const navigate = useNavigate();

  const handleCotizar = () => {
    if (placa !== '') {
      setShowOffers(true);
    } else {
      alert('Por favor, ingrese una placa válida.');
    }
  };

  const handleNext = () => {
    navigate('/verificacion-datos');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Ingreso tu Placa
      </Typography>
      <Box component="form" sx={{ mb: 2 }}>
        <input
          type="text"
          placeholder="Número de Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '100%',
            marginBottom: '10px',
          }}
        />
        <Typography variant="body2" sx={{ mb: 2 }}>
          Al ingresar aceptas la{' '}
          <a href="/politica-privacidad" style={{ textDecoration: 'none' }}>
            Política de privacidad
          </a>.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCotizar}
        >
          Cotizar
        </Button>
      </Box>

      {showOffers && (
        <Box>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6">Ofertas en...</Typography>
            </CardContent>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6">2x1 en...</Typography>
            </CardContent>
          </Card>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleNext}
          >
            Siguiente
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default VehiculoFrm;
