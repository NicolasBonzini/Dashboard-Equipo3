import ContentContainer from "../../../components/ContentContainer";
import Header from "../../../components/Header";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import React from "react";
import Images from "../../../components/Images";
import StockButton from "../../../components/StockButton";
import EditProduct from "../../../components/EditProduct";
import "./productView.css";

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
        <Button text="Eliminar" personalClass="btnDelete" />
      </Header>

      <div className="cont">
        <div className="productView">
          <EditProduct />
          <form className="newForm" action="">
            <div>
              <div className="eachInput">
                <h2>Información</h2>
                <label htmlFor="name">Nombre</label>
                <input
                  className="input"
                  placeholder="inputName"
                  id="name"
                  type="text"
                  name="nombre"
                />
              </div>
              <div className="eachInput">
                <label htmlFor="value">Valor</label>
                <input
                  className="input"
                  placeholder="inputValue"
                  id="value"
                  type="text"
                  name="value"
                />
              </div>
              <StockButton />
              <div className="eachInput">
                <label htmlFor="description">Descripción</label>

                <textarea
                  className="input form-description"
                  placeholder="inpuDescription"
                  id="description"
                  type="textArea"
                  name="descriptiom"
                />
              </div>
              <div className="eachInput store-form">
                <label htmlFor="store">Tienda</label>
                <select name="select" className="input" id="stores">
                  <option selected="true">Tienda</option>
                  <option value="easy">Easy</option>
                  <option value="disco">Disco</option>
                  <option value="jumbo">Jumbo</option>
                  <option value="paris">Paris</option>
                </select>
              </div>
            </div>

            <div>
              <h2>Galeria de Imágenes</h2>
              <div className="eachInput">
                <label htmlFor="image">Nueva Imagen</label>
                <input
                  className="input"
                  placeholder="inputImg"
                  id="image"
                  name="image"
                  type="text"
                />
              </div>
              <div className="eachInput">
                <label>Imágenes actuales</label>
                <Images />
                <Images />
                <Images />
              </div>
            </div>

            <div className="sendForm">
              <button>Cancelar</button>
              <button>Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </ContentContainer>
  );
}

export default ProductView;
