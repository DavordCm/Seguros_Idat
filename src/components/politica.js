import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PoliticasModal = ({ open, handleClose, handleRedirect }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Política de Privacidad
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Esta es la política de privacidad de Seguros IDAT. Aquí puedes incluir
          detalles sobre cómo manejas la información personal de los usuarios,
          cómo se recopila, usa y protege dicha información.
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Asegúrate de que este documento cumpla con las leyes y regulaciones
          locales aplicables.
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
          Cerrar
        </Button>
        
      </Box>
    </Modal>
  );
};

export default PoliticasModal;
