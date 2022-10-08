import React from 'react'
import ContentContainer from '../../components/ContentContainer';
import "./error404.css";

function Error404() {
  return (
    <ContentContainer className="home">
      <main className="container-404">
      <div className="text-container-404">
        <h1>Ups ! Parece que no encontramos la pagina que buscabas</h1>
      </div>
      <a href="/"><div className="button-slider" text="Go to HOME">Click Me</div></a>
    </main>
    </ContentContainer>
  )
}

export default Error404