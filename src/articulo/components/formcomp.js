import React, { useRef, useState } from 'react';
import { Button, Typography, TextField } from '@mui/material';

export default function FormComp() {
  const styles = {
    container: {
      width: 500,
    },
    headerContainer: {
      paddingBottom: 32,
    },
    bodyContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
  };
  const sendValue = () => {
    setInputUser(correoRef.current.value);
  };

  const [inputUser, setInputUser] = useState('');
  const correoRef = useRef('');

  return (
    <div style={styles.container}>
      <div styles={styles.headerContainer}>
        <Typography variant="body1">
          Ingresa tu correo para más información
        </Typography>
      </div>
      <div styles={styles.bodyContainer}>
        <div style={{ paddingRight: 32 }}>
          <TextField
            fullWidth
            id="mailField"
            label="Introduce tu Correo"
            defaultValue={''}
            helperText="Debe ser un correo válido"
            variant="outlined"
            inputRef={correoRef}
            sx={{
              input: {
                color: '#fff',
                border: '1px solid #fff',
                borderRadius: '4px',
              },
              label: { color: '#fff' },
              '#mailField-helper-text': { color: '#fff' },
            }}
          ></TextField>
        </div>
        <div style={{ marginTop: 9 }}>
          <Button variant="contained" onClick={sendValue}>
            Suscribirme
          </Button>
        </div>
      </div>
      <Typography>{inputUser}</Typography>
    </div>
  );
}
