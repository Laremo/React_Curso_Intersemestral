import React from 'react';

export default function CharacterComponent({ character }) {
  return (
    <div className="char-container">
      <div className="infoContainer">
        <h2 className="char-name">{character.name}</h2>
        <div className="char-description">{character.content}</div>
      </div>
      <div className="imageContainer">
        <img
          src={character.image}
          className="char-img"
          alt={`Imagen de ${character.name}`}
        />
      </div>
    </div>
  );
}
