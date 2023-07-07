import React from 'react';
import iconoUsuario from './assets/default.jpg';

export default function TarjetaUsuario({ user }) {
  const defaultUser = {
    nombre: 'default xD',
    saludo: 'hola',
    img: iconoUsuario,
  };
  const { nombre, saludo, img } = user && user.img ? user : defaultUser;
  return (
    <div
      key={user ? user.nombre : defaultUser.nombre}
      style={{
        backgroundColor: '#c2c2e9',
        width: 250,
        height: 100,
        margin: 32,
        borderRadius: 16,
        textAlign: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <div>
          <h3>{nombre}</h3>
          <p>{saludo}</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '16%',
            paddingTop: '2%',
          }}
        >
          <img
            src={img}
            alt="userIcon"
            width={80}
            height={90}
            style={{ borderRadius: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
