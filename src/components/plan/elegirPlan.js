import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Radio, RadioGroup, FormControlLabel, Alert } from '@mui/material';

const ElegirPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleAccept = () => {
    setShowAlert(true);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Elige tu Plan de Seguro
      </Typography>

      <RadioGroup value={selectedPlan} onChange={handlePlanChange}>
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <FormControlLabel
              value="SOAT"
              control={<Radio />}
              label="SOAT (Seguro Obligatorio de Accidentes de Tránsito)"
            />
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <FormControlLabel
              value="Todo Riesgo"
              control={<Radio />}
              label="Seguro Contra Todo Riesgo"
            />
          </CardContent>
        </Card>

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <FormControlLabel
              value="Responsabilidad Civil"
              control={<Radio />}
              label="Seguro de Responsabilidad Civil"
            />
          </CardContent>
        </Card>
      </RadioGroup>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleAccept}
        disabled={!selectedPlan}
      >
        Aceptar
      </Button>

      {showAlert && (
        <Alert severity="success" sx={{ mt: 2 }}>
          ¡Gracias por comprar tu seguro! Hemos enviado el seguro a tu correo.
        </Alert>
      )}
    </Box>
  );
};

export default ElegirPlan;
