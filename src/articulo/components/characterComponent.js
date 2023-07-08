import React from 'react';

export default function CharacterComponent({ character }) {
  return (
    <div className="char-container">
      <div className="infoContainer">
        <h2 className="char-name">{character.name}</h2>
        <p className="char-description">{character.content}</p>
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
