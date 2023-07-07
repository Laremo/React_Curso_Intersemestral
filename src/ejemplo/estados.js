import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import imagen from './assets/shinji.jpg';
import TarjetaUsuario from './tarjetaUsuario';

export default function Estados() {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [currentlyShowing, setCurrentlyShowing] = useState('Nothing :3');

  //Estilos!
  const styles = {
    buttonContainer: {
      //clase
      marginTop: '40px', //estilos
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      margin: '16px',
    },
    text: {
      with: '100%',
      margin: '13px auto',
    },
  };

  const handleClick = (option) => {
    switch (option) {
      case 'imagen':
        setShowImage(!showImage);
        break;
      case 'texto':
        setShowText(!showText);
        break;
      case 'componente':
        setShowComponent(!showComponent);
        break;
      default:
        console.log('uwu');
        break;
    }
  };

  //use efect: funcion, dependencias, cada vez que la dependencia sea
  //diferente al valor actual, re-renderiza con el nuevo valor
  useEffect(() => {
    if (showImage) setCurrentlyShowing('imagen');
    if (showText) setCurrentlyShowing('texto');
    if (showComponent) setCurrentlyShowing('componente');
  }, [showImage, showText, showComponent]);

  return (
    <div style={{ width: '300px', margin: '16px auto' }}>
      <Typography>{`Mostrando actualmente ${currentlyShowing}`}</Typography>
      <div style={styles.buttonContainer}>
        <div style={styles.button}>
          <button onClick={() => handleClick('imagen')}>Imagen</button>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <div style={styles.button}>
          <button onClick={() => handleClick('texto')}>Texto</button>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <div style={styles.button}>
          <button onClick={() => handleClick('componente')}>Componente</button>
        </div>
      </div>
      <div>
        {showImage && (
          <img
            alt="Shinji"
            src={imagen}
            width={400}
            style={{
              margin: 50,
              borderRadius: 20,
            }}
          />
        )}
        {showText && (
          <Typography style={styles.text}>{` HOLAAAAA `}</Typography>
        )}
        {showComponent && <TarjetaUsuario />}
      </div>
    </div>
  );
}
