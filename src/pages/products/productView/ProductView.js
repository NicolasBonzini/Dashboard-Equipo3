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


function ProductView() {

  const id = useParams().id;


  // Seteo estado inicial del formulario a enviar
  const [form, setform] = useState(prueba)

  //Llamado api
  useEffect(()=>{
    async function get(){
      await getProductById(id)
      .then(re=>{setform(re); console.log(re)}
      )
    }
    get()    
  }, []);



  //Tomo los datos de los inputs
  // const handleInput = async (e) =>{
  //   console.log(e.target.id)
  //   setform({
  //     ...form,
  //     [e.target.name] : e.target.value,
  //   })
  //   console.log(form)
    
  // }

  // const handleStock = (e)=>{
  //   console.log(e)

  // }




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
      <EditProduct/>
      <EditForm/>
    </ContentContainer>
  )
}

export default ProductView;
