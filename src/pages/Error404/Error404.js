import React from 'react'
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import MainContainer from '../../components/MainContainer/MainContainer';
import "./error404.css";

function Error404() {
  return (
    <ContentContainer className="home">
      <MainContainer>
        <div className="container-404">
          <div className="text-container-404">
            <h1>Ups ! Parece que no encontramos la pagina que buscabas</h1>
          </div>
          <a href="/"><div className="button-slider" text="Go to HOME">Click Me</div></a>
        </div>
      </MainContainer>
    </ContentContainer>
  )
}

export default Error404