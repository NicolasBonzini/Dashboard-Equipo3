//Componentes
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import MainContainer from "../../components/MainContainer/MainContainer";
//Css
import "./error404.css";
//ReactRouter
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <ContentContainer className="home">
      <MainContainer>
        <div className="container-404">
          <div className="text-container-404">
            <h1>Ups ! Parece que no encontramos la pagina que buscabas</h1>
          </div>
          <NavLink to="/">
            <div className="button-slider" text="Go to HOME">
              Click Me
            </div>
          </NavLink>
        </div>
      </MainContainer>
    </ContentContainer>
  );
}

export default Error404;
