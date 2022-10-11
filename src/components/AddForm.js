import { useEffect, useState, React } from "react";

//Estilos
import "../assets/styles/stockButton.css";
import "../assets/styles/images.css";
import "../assets/styles/editForm.css";
//Servicios
import addProduct from "../utils/addProduct";
import getProducts from "../utils/getProducts";
// Componentes
import Input from "./Input";
import Stock from "./Stock";
import TextArea from "./TextArea";
import Select from "./Select";
import Images from "./Images";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const navigate = useNavigate();
  // Codigo para conservar el ultimo id de la lista de productos e incluirselo al nuevo producto agregado

  const [lastId, SetLastId] = useState(0);

  useEffect(() => {
    getProducts().then((data) => SetLastId(data[data.length - 1].id + 1));
  }, []);

  useEffect(() => {
    form.id = lastId;
  }, [lastId]);

  // Estado del formulario
  const [form, setform] = useState({
    id: 0,
    title: "",
    description: "",
    price: 10,
    rating: {
      rate: 0,
      count: 5,
    },
    stock: Number(0),
    category: "",
    images: [""],
  });

  // Estado del contador de stock
  const [counter, setCounter] = useState(form.stock);

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
      stock: counter,
    });
  }, [counter]);

  //IMAGENES//

  // Actualizo / Elimino las imagenes
  const handleImg = (e) => {
    const image = e.target.value;
    form.images.push(image);
    setform({ ...form });
  };
  const deleteIMG = (e) => {
    e.preventDefault();
    const deletedUrl = e.target.value;
    let imagesForm = form.images.filter((image) => image !== deletedUrl);
    setform({ ...form, images: imagesForm });
  };
  //FIN IMAGENES//

  //Input handlers

  const handleInput = async (e) => {

    if ((e.target.name == "price") & (e.target.name.length > 0)) {
      setform({
        ...form,
        [e.target.name]: Number(e.target.value),
      });
    } else if ((e.target.name == "price") & (e.target.name.length == 0)) {
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
    let response = await addProduct(form);

    if (response.status === 201) {
      alert("Producto agregado correctamente.");
      navigate("/products");
    } else {
      alert(response.error);
    }
  };

  return (
    <>
      <div className="cont">
        <div className="productView">
          <form className="newForm" action="">
            <div>
              <h2>Información</h2>
              <Input
                type="text"
                name="title"
                id="title"
                label="Nombre"
                value={form.title}
                handler={handleInput}
              />
              <Input
                type="number"
                name="price"
                id="price"
                label="Valor"
                value={form.price}
                handler={handleInput}
              />
              <Stock
                handlerI={handleIncrement}
                handlerD={handleDecrement}
                stock={counter}
              />
              <TextArea value={form.description} handler={handleInput} />
              <Select />
            </div>
            <div>
              <h2>Galeria de Imágenes</h2>
              <Input
                type="text"
                name="image"
                id="image"
                label="Nueva Imagen"
                handlerBlur={handleImg}
              />
              <Images handler={deleteIMG} images={form.images} />
            </div>

            {/* cancelar o enviar formulario */}
            <div className="sendForm">
              <button>Cancelar</button>
              <button onClick={handleSave}>Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddForm;
