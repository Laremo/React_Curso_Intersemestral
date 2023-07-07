import React, { useState } from 'react';
import iconoUsuario from './assets/shinji.jpg';
import TarjetaUsuario from './tarjetaUsuario';
export default function EjercicioUno() {
  const users = [
    {
      nombre: 'Laremo',
      saludo: 'Wenas',
      img: 'https://lh3.googleusercontent.com/pw/AJFCJaVuBv94-AhfRHyJnzDVSQVHZxPq8zM3Pz_5uoQ2F_Rn6MQHwDYQSmT3vpbK09znFtQv14Gdqte9ez3OXdJWbxHxM1VfSVhojjfoCbcYgb-4heuzrTU6N7UaZSdVV4ohYm2HaxzMybNa1id5kh-t-6m7iLw3-qD0Gp0FeT-VsI5Fj-YtRHMEiP8i0Nf9Ceg-BUs6Iqxo0xfLqPhhfm0t7QMhwcPHfqFeaPLmZUOfUtfvZUtTF4fQef3AXF9Xc4scsAyLSmEbINgmkJb9j2lf4-Oz4UB9cfxhBgpCK2squ3YcgdovXyUvhXuLUn1s7DWypQJ_otZrYa9Yxg_Ed9avHNT8LXGah6JDnIldFL8f-c8WMPNJmqDhTY09faG_1uAQX0uvba1coTuz-V8CcD1UNfXkmO5Gjm3s7-KCug6DDlyCRJn5OWjRDGqFFiSJ_pRLF7rULlP2LyHNdGx6vqhzzQObzsoS1HwUqPo1DcPkfLX5tpui3poEcPHCs65AAS9lm8nhWdcYH6BF86R0TUOejh_t5YWhGPvzfQYCBrv8OGCBur2IYaGSLwvwfvi72uqw86gkTMnkp_ggM5sdEZ3UaQyCxG5Zon-KEdv-rAjE0VGVyOt8JbBkPHH27Udl_x-m5W5S4EIpXYqCLZ8EtiM1tTJrdw4Q0HsaiOTs5Ipy7g8RpboG4AYhhmR4WOYjAYvCZGAdu9yy9P2CufLLLti6_mCkPRe_4SziryYrVW1FU9JHbcQIeBD-XbufFjcp-Ld4VWUhFXCao9k-bQm4wu3OxdtxnRmHEe43rMllY_w8fNs2p2qAnLHq93deV0qV9mMQeRDyhK5H0ovk6Q5KrJm6iRMpSF0KuWmqy2QEldxj4KQ9EkaAH9IotuZy3icMrZYO_5nX8mP90j1NKdBZSLKkHQ=w960-h432-s-no?authuser=0',
    },
    {
      nombre: 'Snoopy',
      saludo: 'Wuff!',
      img: 'https://th.bing.com/th/id/OIP.WdHidaqFQheqisAVvk_WfQHaFA?pid=ImgDet&rs=1',
    },
    {
      nombre: 'Gato :3',
      saludo: 'Meow!',
      img: 'https://i.pinimg.com/originals/c4/35/ae/c435ae92a9c6dd0a636f345f1ad94672.jpg',
    },
    {
      nombre: 'Shinji',
      saludo: '*Se sube al EVA*',
      img: iconoUsuario,
    },
    {},
  ];

  const [prueba, setPrueba] = useState('Valor inicial de la prueba');
  const [clicks, setClicks] = useState(1);

  const handleClick = (text) => {
    if (!text) setPrueba(`Picaste ${clicks} ${clicks > 1 ? 'veces' : 'vez'}`);
    else setPrueba(`Clickeaste el boton ${text}`);
    setClicks(clicks + 1);
  };
  return (
    <>
      <p>{prueba}</p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Pica
      </button>
      <button
        onClick={() => {
          handleClick('Hola');
        }}
      >
        Hola
      </button>
      <button
        onClick={() => {
          handleClick('Buona sera');
        }}
      >
        Buona sera
      </button>
      <button
        onClick={() => {
          handleClick('Hey');
        }}
      >
        Hey
      </button>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Usuario
      </button>
      {users.map((user) => {
        {
          if (user?.nombre === 'Shinji') return <TarjetaUsuario user={user} />;
        }
      })}
      {users.map((user) => {
        return <TarjetaUsuario user={user} />;
      })}
      {/* <TarjetaUsuario />
      <TarjetaUsuario user={users[2]} /> */}
    </>
  );
}
