import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useLocation } from 'react-router-dom';

function Header({ isAuthenticated, onLogout }) {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        {location.pathname !== '.login' && (
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Seguros IDAT
          </Typography>
        )}
        {isAuthenticated && (
          <>
            <Button color="inherit" component={Link} to="/">
              Inicio
            </Button>
            <Button color="inherit" component={Link} to="/vehiculo">
              Vehículo
            </Button>
            <Button color="inherit" component={Link} to="/contacto">
              Contacto
            </Button> 
            <Button color="inherit" onClick={onLogout} startIcon={<ExitToAppIcon />}>
              Cerrar Sesión
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
