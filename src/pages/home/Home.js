import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import HomeContent from "../../components/HomeContent/HomeContent";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer.js";

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
