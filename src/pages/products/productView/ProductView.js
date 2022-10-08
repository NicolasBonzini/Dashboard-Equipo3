import ContentContainer from "../../../components/ContentContainer";
import Header from "../../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import React from "react";
import Images from "../../../components/Images";
import StockButton from "../../../components/StockButton";
import EditProduct from "../../../components/EditProduct";
import "./productView.css";

function ProductView() {
  const id = useParams().id;
  const navigate = useNavigate()
      // Seteo estado inicial del formulario a enviar
  const [form, setform] = useState( {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    rating: {
      rate: 4.69,
      count: 354
    },
    stock: 94,
    category: "smartphones",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]
  })

  //Tomo los datos de los inputs
  const handleInput = (e) =>{
    console.log(e.target.id)
    // console.log(form)
    setform({
      ...form,
      [e.target.name] : e.target.value,
    })
    console.log(form)
    
  }
  //Borrar producto
  function deleteProduct(){
    fetch(`http://localhost:5000/api/product?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => data.error ? console.log(data.error) : navigate('/products'))
    .catch(error => console.log('Error al intentar eliminar, revisa: ' + error))
  }


  return (
    <ContentContainer className="home">
      <Header>
        <div className="title textCtn">
          <Link className="title products" to="/products">
            Productos
            <i className="fa-solid fa-greater-than"></i>
          </Link>
          <Link className="title" to={'/product/' + id}>
            {id}
          </Link>
        </div>
        
        <Button deleteProduct={deleteProduct} text="Eliminar" personalClass="btnDelete"></Button>
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
                  value={form.title}
                  onChange={handleInput}
                  className="input"
                  placeholder="inputName"
                  id="name"
                  type="text"
                  name="nombre"
                />
              </div>
              <div className="eachInput">
                <label htmlFor="price">Valor</label>
                <input
                  value={form.price}
                  onChange={handleInput}
                  className="input"
                  placeholder="inputPrice"
                  id="price"
                  type="text"
                  name="price"
                />
              </div>
              <StockButton stock={form.stock} />
              <div className="eachInput">
                <label htmlFor="description">Descripción</label>

                <textarea
                value={form.description}
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
                  <option value=' '>Tienda</option>
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
