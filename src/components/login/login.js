// src/components/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Link as MuiLink } from '@mui/material';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Seguros IDAT
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Nombre de Usuario"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Iniciar Sesión
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
        Al iniciar sesión, aceptas nuestra{' '}
        <MuiLink href="/politica-privacidad">
          Política de Privacidad
        </MuiLink>.
      </Typography>
    </Container>
  );
}

export default Login;
