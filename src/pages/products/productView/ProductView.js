import ContentContainer from "../../../components/ContentContainer";
import Header from "../../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import React from "react";

import getProductById from "../../../utils/getProductById";
import EditProduct from "../../../components/EditProduct";
import "./productView.css";
import EditForm from "../../../components/EditForm";
import deleteProduct from "../../../utils/deleteProduct";


function ProductView() {

  const id = useParams().id;

  


  return (
    <ContentContainer className="home">
      <Header>
      <div className="title textCtn">
        <Link className="title products" to="/products">
          Productos
          <i className="fa-solid fa-greater-than"></i>
        </Link>
        <Link className="title" to="/products/new">
          {id}
        </Link>
      </div>
      <Button  text="Eliminar" id={id} personalClass="btnDelete" />
      </Header>
      <EditProduct/>
      <EditForm/>
    </ContentContainer>
  )
}

export default ProductView;
