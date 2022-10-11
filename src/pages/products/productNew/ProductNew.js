import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import Header from "../../../components/Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import React from "react";
import AddForm from "../../../components/AddForm/AddForm";
// import "./productView.css";
import MainContainer from "../../../components/MainContainer/MainContainer";

function ProductNew() {
  const id = useParams().id;
  const navigate = useNavigate();
  // Seteo estado inicial del formulario a enviar
  const [form, setform] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    rating: {
      rate: "",
      count: "",
    },
    stock: "",
    category: "",
    images: [""],
  });

  //Tomo los datos de los inputs
  const handleInput = (e) => {
    console.log(e.target.id);
    // console.log(form)
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  //Borrar producto
  function deleteProduct() {
    fetch(`http://localhost:5000/api/product?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.error ? console.log(data.error) : navigate("/products")
      )
      .catch((error) =>
        console.log("Error al intentar eliminar, revisa: " + error)
      );
  }

  return (
    <ContentContainer className="home">
      <Header>
        <div className="title textCtn">
          <Link className="title " to="/products">
            Productos
            <i className="fa-solid fa-greater-than"></i>
            Nuevo Producto
          </Link>
          <Link className="title" to={"/product/" + id}>
            {id}
          </Link>
        </div>
      </Header>
      <MainContainer>
        <AddForm />
      </MainContainer>
    </ContentContainer>
  );
}

export default ProductNew;
