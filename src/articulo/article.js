import React, { useState } from 'react';
import { articleContent } from './components/articleContent';
import './article.css';
import FormComp from './components/formcomp';
import { Typography } from '@mui/material';
import CharacterComponent from './components/characterComponent';

export default function Article() {
  const [users, setUsers] = useState(['user 1', 'user2']);
  const [currentCharacter, setCurrentChar] = useState(0);
  const characters = [];

  const handleForward = () => {
    if (currentCharacter < characters.length - 1)
      setCurrentChar(currentCharacter + 1);
    else setCurrentChar(0);
  };

  const handleBackwards = () => {
    if (currentCharacter === 0) setCurrentChar(characters.length - 1);
    else setCurrentChar(currentCharacter - 1);
  };

  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="text">Neuromancer</h1>
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
              characters.push(item);
              return null;
            default:
              return null;
          }
        })}
        <div className="char-slider">
          <button className="slide-btn" onClick={handleBackwards}>
            {`<`}
          </button>
          {<CharacterComponent character={characters[currentCharacter]} />}
          <button className="slide-btn" onClick={handleForward}>
            {`>`}
          </button>
        </div>
      </div>
      <div className="formContainer">
        <FormComp users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}
