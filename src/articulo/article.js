import React from 'react';
import ArticleContent from './components/articleContent';
import './article.css';
import FormComp from './components/formcomp';

export default function Article() {
  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="text">Mostrando un Articulo</h1>
      </div>
      <div className=" bodyContainer">
        <p> body</p>
      </div>
      <div className="formContainer">
        <FormComp />
      </div>
    </div>
  );
}
