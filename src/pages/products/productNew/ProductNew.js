//Componentes
import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import Header from "../../../components/Header/Header";
import AddForm from "../../../components/AddForm/AddForm";
import MainContainer from "../../../components/MainContainer/MainContainer";
//React router
import { Link, useNavigate, useParams } from "react-router-dom";
//React
import { useState } from "react";
//Sweet Alert
import swal from 'sweetalert'

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

    setform({
      ...form,
      [e.target.name]: e.target.value,
    });

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
        data.error ? (swal({
          title: "Error al borrar el producto",
          icon: 'error'
        }).then(() => navigate('/') )) : navigate("/products")
      )
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
