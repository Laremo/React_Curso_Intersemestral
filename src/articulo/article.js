import React, { useState } from 'react';
import { articleContent } from './components/articleContent';
import './article.css';
import FormComp from './components/formcomp';
import { Typography } from '@mui/material';

const userArray = [];

let x = 0;

const updateUserList = (user) => {
  userArray.push(user);
};

export default function Article() {
  const [users, setUsers] = useState(['user 1', 'user2']);

  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="text">Mostrando un Articulo</h1>
      </div>
      <div className=" bodyContainer">
        {articleContent.map((item) => {
          switch (item.type) {
            case 'title':
              return <h3 className="subTitle">{item.content}</h3>;
            case 'body':
              return (
                <Typography className="textbox" variant="body1">
                  {item.content}
                </Typography>
              );
            case 'image':
              return (
                <img
                  className="element-img"
                  src={item.content}
                  alt={item.alt ? item.alt : 'sin alt'}
                />
              );
            case 'character':
              return <p>Aqui debe ir un personaje</p>;
            default:
              return null;
          }
        })}
      </div>
      <div className="formContainer">
        {/* {console.log('render')}
        {setInterval(() => {
          console.log(`i = ${x}`, users);
          x++;
          if (x >= 100) clearInterval();
        }, 1000)} */}
        <FormComp users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}
