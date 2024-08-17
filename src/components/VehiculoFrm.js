import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Box, Typography, Select, MenuItem } from '@mui/material';

function VehiculoFrm() {
  const [placa, setPlaca] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const [tipoSeguro, setTipoSeguro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (placa !== '') {
      setShowSelect(true);
    }
  };

  const handleSelectChange = (e) => {
    setTipoSeguro(e.target.value);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Seguro de Vehículo
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Número de Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Typography variant="body2">
          Al ingresar aceptas la{' '}
          <Link to="/politica-privacidad">Política de privacidad</Link>.
        </Typography>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Cotizar
        </Button>
      </form>

      {showSelect && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="h2">
            Selecciona un tipo de seguro:
          </Typography>
          <Select
            value={tipoSeguro}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>
              Seleccionar...
            </MenuItem>
            <MenuItem value="SOAT">SOAT</MenuItem>
            <MenuItem value="Todo Riesgo">Seguro Contra Todo Riesgo</MenuItem>
            <MenuItem value="Responsabilidad Civil">Seguro de Responsabilidad Civil</MenuItem>
          </Select>
        </Box>
      )}
    </Box>
  );
}

export default VehiculoFrm;
