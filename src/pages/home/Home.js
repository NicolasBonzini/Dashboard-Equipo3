//React
import { useEffect, useState } from "react";
//Componentes
import Header from "../../components/Header/Header";
import HomeContent from "../../components/HomeContent/HomeContent";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import MainContainer from "../../components/MainContainer/MainContainer.js";
//React router
import { Link } from "react-router-dom";

function Home() {
  const [id, setId] = useState("Anonimo");

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("user"))?.name || id);
  }, []);
  
  return (
    <ContentContainer className="home">
      <Header>
        <Link className="title" to="/profile">
          ¡Hola {id}!
        </Link>
      </Header>
      <MainContainer>
        <HomeContent />
      </MainContainer>
    </ContentContainer>
  );
}

export default Home;
