import React from 'react'
import "./error404.css";

function Error404() {



  return (
    <main className="container-404">
      <div className="text-container-404">
        <h1>Ups ! Parece que no encontramos la pagina que buscabas</h1>
      </div>
      <a href="/"><div className="button-slider" text="Go to HOME">Click Me</div></a>
    </main>
  )
}

export default Error404