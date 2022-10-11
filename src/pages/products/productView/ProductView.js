import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import EditForm from "../../../components/EditForm/EditForm";
import MainContainer from "../../../components/MainContainer/MainContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
// import "./productView.css";

import swal from 'sweetalert';

function ProductView() {
  const id = useParams().id;
  const navigate = useNavigate();
  
  //Borrar producto
  function deleteProduct(e) {
    swal({
      title: "Está seguro?",
      text: "Una vez eliminado, no puede recuperar el producto.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Producto eliminado!", {
          icon: "success",
        });
        fetch(`http://localhost:5000/api/product?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then( () => navigate('/products'));
      
      } else {
        swal("El producto no ha sido eliminado.");
      }
    });






    // fetch(`http://localhost:5000/api/product?id=${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) =>
    //     data.error ? console.log(data.error) : navigate("/products")
    //   )
    //   .catch((error) =>
    //     console.log("Error al intentar eliminar, revisa: " + error)
    //   );
  }

  return (
    <ContentContainer className="contentContainer home">
      <Header>
        <div className="title textCtn">
          <Link className="title " to="/products">
            Productos
            <i className="fa-solid fa-greater-than"></i>
          </Link>
          <Link className="title" to={"/product/" + id}>
            {id}
          </Link>
        </div>
        <Button
          handler={deleteProduct}
          text="Eliminar"
          personalClass="btnDelete"
        ></Button>
      </Header>
      <MainContainer>
        <EditForm />
      </MainContainer>
    </ContentContainer>
  );
}

export default ProductView;
