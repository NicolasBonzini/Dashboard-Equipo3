//React
import { useEffect, useState } from "react";
//Estilos
import "../StockButton/stockButton.css";
import "../DeleteImage/deleteImage.css";
import "../EditForm/editForm.css";
//Servicios
import addProduct from "../../utils/addProduct";
import getProducts from "../../utils/getProducts";
//React router
import { useNavigate } from "react-router-dom";
//Sweet alert
import swal from "sweetalert";
//Componentes
import Form from "../Form/Form";

function AddForm() {
  const navigate = useNavigate();

  // Estado del formulario
  const [form, setform] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    images: [],
  });

  const Save = async (e, formulario) => {
    e.preventDefault();
    let response = await addProduct(formulario);

    if (response.status === 201) {
      swal({
        title: "Producto agregado correctamente.",
        icon: "success",
      }).then(() => navigate("/products"));
    } else {
      swal({
        title: "Ha ocurrido un error, no se ha podido agregar.",
        icon: "error",
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    swal({
      title: "No ha añadido ningún producto",
      icon: "error",
    }).then(() => navigate("/products"));
  };

  return (
    <>
      <div className="cont">
        <Form Save={Save} formu={form} />
      </div>
    </>
  );
}

export default AddForm;
