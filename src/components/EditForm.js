import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import React from "react";
import Images from "./Images";
import '../assets/styles/stockButton.css'

import getProductById from "../utils/getProductById";


const prueba = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  rating: {
    rate: 4.69,
    count: 354
  },
  stock: 5,
  category: "smartphones",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
  ]
}


function EditForm() {

  const id = useParams().id;

  // Seteo estado inicial del formulario a enviar
  const [form, setform] = useState(prueba)
  const [counter, setCounter] = useState(form.stock)

  //Llamado api
  useEffect(()=>{
    async function get(){
      await getProductById(id)
      .then(re=>{setform(re);setCounter(re.stock);console.log(re)}
      )
    }
    get()    
  }, []);



  //Funciones incremento y decremento
  const handleDecrement = (e)=>{
    e.preventDefault()
    if(counter>0){
      setCounter(counter-1)
    } 
  }
  const handleIncrement = (e)=>{
    e.preventDefault()
    setCounter(counter+1)
  }
  

  //Tomo los datos de los inputs
  const handleInput = async (e) =>{
    console.log(e.target.id)
    setform({
      ...form,
      [e.target.name] : e.target.value,
    })
    console.log(form)
    
  }


  //BOTON DE GUARDAR
  const handleSave =(e) =>{
    e.preventDefault()
    console.log(e)

  }

  return (
      <div className="cont">
        <div className="productView">
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
              {/* stock button */}
            <div className='eachInput'>
                <label>Stock</label>
                <div className="counter">
                <button type="number" onClick={handleDecrement} className="decrement">-</button>
                <p className="result">{counter}</p>
                <button type="number"  onClick={handleIncrement} className="increment">+</button>
            </div>
            </div>
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
                {form.images.map((image,id)=>{
                  return <Images key={id + image}url={image} />

                })}
              </div>
            </div>

            <div className="sendForm">
              <button>Cancelar</button>
              <button onClick={handleSave}>Guardar</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default EditForm;
