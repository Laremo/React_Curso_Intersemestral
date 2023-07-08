import React, { useRef, useState } from 'react';
import { Button, Typography, TextField } from '@mui/material';
//Deconstruction, se reccibe el parámetro como objeto
//extraemos las props individualmente
export default function FormComp({ users = [], setUsers = () => {} }) {
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
    console.log(users);
    //hacemos magia
    if (users.some((us) => us === correoRef.current.value))
      return alert(correoRef.current.value + ' already exists');

    const result = [...users, correoRef.current.value]; //usando spread operator
    setUsers(result);
    return alert(`Saved use ${correoRef.current.value}`);
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
