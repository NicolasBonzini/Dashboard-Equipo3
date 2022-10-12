//React
import { useEffect, useState, React } from "react";
//Estilos
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
//Servicios
import putProducts from "../../utils/putProducts";
import getProductById from "../../utils/getProductById";
// Componentes
import EditProduct from "../EditProduct/EditProduct";
//Sweet Alert
import swal from "sweetalert";
//React Router
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Form from "../Form/Form";
function EditForm() {
  const navigate = useNavigate();
  // Tomo el parametro de la url para identificar el productos
  const id = useParams().id;
  // Estado del formulario
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
  // Estado del contador de stock
  const [counter, setCounter] = useState(form.stock);
  const [image, setImg] = useState("");
  //Llamado a la api
  useEffect(() => {
    async function get() {
      await getProductById(id).then((re) => {
        if (re.status === 404) {
          swal({
            title: re.error,
            icon: "error",
          }).then(() => navigate("/"));
        } else {
          setform(re);
          setCounter(re.stock);
        }
      });
    }
    get();
  }, []);

  //STOCK//
  //Funciones incremento y decremento
  const handleDecrement = (e) => {
    e.preventDefault();
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  // Actualizo el stock del formulario con el estado del contador
  useEffect(() => {
    setform({
      ...form,
      stock: Number(counter),
    });
  }, [counter]);

  const handleStock = (e) => {
    setform({
      ...form,
      stock: Number(e.target.value),
    });
    setCounter(e.target.value)
  };
  // FIN STOCK //

  // HANDLERS

  //IMAGENES//
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

  function prueba(e) {
    e.preventDefault();
    const found = form.images.find((im) => im == image);
    if (image.length > 0) {
      if (!found) {
        form.images.push(image);
        setform({ ...form });
        setImg("");
      } else {
        setImg("");
      }
    }
  } //FIN IMAGENES//

  //Input handlers
  const handleInput = (e) => {
    if (e.target.name == "price" && e.target.name.length > 0) {
      setform({
        ...form,
        [e.target.name]: Number(e.target.value),
      });
    } else if (e.target.name == "price" && e.target.name.length == 0) {
      alert("Ingrese un valor en el nombre");
    } else {
      setform({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Boton de hardar
  const handleSave = async (e) => {
    e.preventDefault();
    let resp = await putProducts(form);

    if (resp.status === 200) {
      swal({
        title: "El producto ha sido actualizado",
        icon: "success",
      }).then(() => navigate("/products"));
    } else {
      swal({
        title: "Ha ocurrido un error, no se pudo modificar el producto.",
        icon: "error",
      });
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    swal({
      title: "El producto no ha sido actualizado",
      icon: "error",
    });
    async function get() {
      await getProductById(id).then((re) => {
        setform(re);
        setCounter(re.stock);
      });
    }
    get();
  };

  return (
    <>
      <div className="cont">
        <EditProduct
          img={form.images[0]}
          name={form.title}
          stock={form.stock}
          valor={form.price}
          alt={form.title}
        />
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

export default EditForm;


