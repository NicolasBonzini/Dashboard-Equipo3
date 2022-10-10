import ContentContainer from "../../../components/ContentContainer";
import Header from "../../../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import React from "react";
// import "./productView.css";
import EditForm from "../../../components/EditForm";
import MainContainer from "../../../components/MainContainer";

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
          <Link className="title " to="/products">
            Productos
            <i className="fa-solid fa-greater-than"></i>
          </Link>
          <Link className="title" to={'/product/' + id}>
            {id}
          </Link>
        </div>
        <Button deleteProduct={deleteProduct} text="Eliminar" personalClass="btnDelete"></Button>
      </Header>
      <MainContainer>
        <EditForm/>
      </MainContainer>
    </ContentContainer>
  )
}

export default ProductView;
