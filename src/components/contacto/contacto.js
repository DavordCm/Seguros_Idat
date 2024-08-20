
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Contacto() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través de los siguientes medios:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Teléfono: +123 456 7890" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Correo Electrónico: contacto@segurosidat.com" />
        </ListItem>
        <ListItem>
          <ListItemText primary="..." />
        </ListItem>
      </List>
    </Container>
  );
}

export default Contacto;
