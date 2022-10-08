import ContentContainer from "../../../components/ContentContainer";
import Header from "../../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import React from "react";
import Images from "../../../components/Images";
import StockButton from "../../../components/StockButton";

import getProductById from "../../../utils/getProductById";
import EditProduct from "../../../components/EditProduct";
import "./productView.css";


const prueba = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  rating: {
    rate: 4.69,
    count: 354
  },
  stock: 90,
  category: "smartphones",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
  ]
}


function ProductView() {

  const id = useParams().id;


      // Seteo estado inicial del formulario a enviar
  const [form, setform] = useState(prueba)
  useEffect(()=>{
    async function get(){
      await getProductById(id)
      .then(re=>{setform(re); console.log(re)}
      )
    }
     get()
    
    // setform(data)

  }, [])
  //Tomo los datos de los inputs
  const handleInput = async (e) =>{
    console.log(e.target.id)
    setform({
      ...form,
      [e.target.name] : e.target.value,
    })
    console.log(form)
    
  }




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
                <label htmlFor="title">Nombre</label>
                <input
                  value={form.title}
                  onChange={handleInput}
                  className="input"
                  placeholder="inputName"
                  id="title"
                  type="text"
                  name="title"
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
                  onChange={handleInput}
                  className="input form-description"
                  placeholder="inpuDescription"
                  id="description"
                  type="textArea"
                  name="description"
                />
              </div>
              <div className="eachInput store-form">
                <label htmlFor="store">Tienda</label>
                <select name="select" className="input" id="stores">
                  <option defaultValue={true}>Tienda</option>
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
                  // value={form.images}
                  onChange={handleInput}
                  className="input"
                  placeholder="inputImg"
                  id="image"
                  name="image"
                  type="text"
                />
              </div>
              <div className="eachInput">
                <label>Imágenes actuales</label>
                {form.images.map(image=>{
                  console.log(image)
                  return <Images url={image} />

                })}
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
