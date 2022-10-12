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
    id: 0,
    title: "",
    description: "",
    price: 0,
    stock: Number(0),
    category: "",
    images: [],
  });

  const [image, setImg] = useState("");

  // Codigo para conservar el ultimo id de la lista de productos e incluirselo al nuevo producto agregado
  const [lastId, SetLastId] = useState(0);

  // Estado del contador de stock
  const [counter, setCounter] = useState(form.stock);

  useEffect(() => {
    getProducts().then((data) => SetLastId(data[data.length - 1].id + 1));
  }, []);

  useEffect(() => {
    setform({ ...form, id: lastId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastId]);

  // Actualizo el stock del formulario con el estado del contador
  useEffect(() => {
    setform({
      ...form,
      stock: counter,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  //----------STOCK
  //Funciones incremento y decremento
  const handleDecrement = (e) => {
    e.preventDefault();

    if (counter > 0) {
      setCounter(Number(counter) - 1);
    }
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setCounter(Number(counter) + 1);
  };

  const handleStock = (e) => {
    setform({
      ...form,
      stock: Number(e.target.value),
    });
    setCounter(e.target.value)
  };

  //-------------IMAGENES
  // Actualizo / Elimino las imagenes
  const handleImg = (e) => {
    setImg(e.target.value);
  };

  const deleteIMG = (e) => {
    e.preventDefault();
    swal({
      title: "Imagen eliminada",
      icon: "success",
    });
    const deletedUrl = e.target.value;
    let imagesForm = form.images.filter((image) => image !== deletedUrl);
    setform({ ...form, images: imagesForm });
  };

  //--------------Input handlers
  const handleInput = async (e) => {
    if (e.target.name === "price" && e.target.name.length > 0) {
      setform({
        ...form,
        [e.target.name]: Number(e.target.value),
      });
    } else if (e.target.name === "price" && e.target.name.length === 0) {
      alert("Ingrese un valor en el nombre");
    } else {
      setform({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    let response = await addProduct(form);

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
  function prueba(e) {
    e.preventDefault();
    const found = form.images.find((im) => im === image);
    if (image.length > 0) {
      if (!found) {
        form.images.push(image);
        setform({ ...form });
        setImg("");
      } else {
        setImg("");
      }
    }
  }

  return (
    <>
      <div className="cont">
        <Form
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleStock={handleStock}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleInput={handleInput}
          prueba={prueba}
          deleteIMG={deleteIMG}
          handleImg={handleImg}
          counter={counter}
          image={image}
          form={form}
        />
      </div>
    </>
  );
}

export default AddForm;
