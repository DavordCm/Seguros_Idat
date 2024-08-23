import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PoliticasModal from './politica'; // Asegúrate de importar el componente modal

const VehiculoFrm = () => {
  const [placa, setPlaca] = useState('');
  const [open, setOpen] = useState(false); // Estado para controlar el modal
  const navigate = useNavigate();

  const handleCotizar = async () => {
    if (placa !== '') {
      try {
        const response = await fetch(`http://localhost:5085/api/API_sunarp_/api/vehicles/${placa}`);
        if (!response.ok) {
          alert('No se encontró el vehículo con la placa ingresada.');
          return;
        }
        const data = await response.json();
        // Pasar los datos al siguiente componente
        navigate('/datos', { state: data });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        alert('Hubo un error al buscar los datos del vehículo.');
      }
    } else {
      alert('Por favor, ingresa un número de placa.');
    }
  };

  const handleOpenModal = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  const handleRedirectToVehiculoFrm = () => {
    setOpen(false);
    navigate('/vehiculo');
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
          <button
            onClick={handleOpenModal}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: '#069',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: 'inherit',
            }}
          >
            Política de privacidad
          </button>.
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
      <PoliticasModal open={open} handleClose={handleCloseModal} handleRedirect={handleRedirectToVehiculoFrm} />
    </Box>
  );
};

export default VehiculoFrm;
