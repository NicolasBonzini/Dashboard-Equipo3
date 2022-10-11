import { useEffect, useState, React } from "react";

//Estilos
import "../StockButton/stockButton.css";
import "../DeleteImage/deleteImage.css";
import "../EditForm/editForm.css";
//Servicios
import addProduct from "../../utils/addProduct";
import getProducts from "../../utils/getProducts";
// Componentes
import Input from "../Input/Input";
import Stock from "../Stock/Stock";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import DeleteImage from "../DeleteImage/DeleteImage";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

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
    images: [""],
  });

  // Codigo para conservar el ultimo id de la lista de productos e incluirselo al nuevo producto agregado
  const [lastId, SetLastId] = useState(0);

  // Estado del contador de stock
  const [counter, setCounter] = useState(form.stock);

  useEffect(() => {
    getProducts().then((data) => SetLastId(data[data.length - 1].id + 1));
  }, []);

  useEffect(() => {
    setform({ ...form, id: lastId })
  }, [lastId]);

  // Actualizo el stock del formulario con el estado del contador
  useEffect(() => {
    setform({
      ...form,
      stock: counter,
    });
  }, [counter]);



  //----------STOCK

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


  //-------------IMAGENES

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


  //--------------Input handlers

  const handleInput = async (e) => {
    if ((e.target.name === "price") & (e.target.name.length > 0)) {
      setform({
        ...form,
        [e.target.name]: Number(e.target.value),
      });
    } else if ((e.target.name === "price") & (e.target.name.length === 0)) {
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
    console.log(response);
    if (response.status === 201) {
      swal({
        title: 'Producto agregado correctamente.',
        icon: 'success'
      }).then(() => navigate('/products'));
    } else {
      swal({
        title: 'Ha ocurrido un error, no se ha podido agregar.',
        icon: 'error'
      })
    };
  }

  return (
    <>
      <div className="cont">
        <div className="productView">
          <form className="newForm" action="">
            <div>
              <h2>Información</h2>
              <Input type="text" name="title" id="title" label="Nombre" value={form.title} handler={handleInput} />
              <Input type="number" name="price" id="price" label="Valor" value={form.price} handler={handleInput} />
              <Stock handlerI={handleIncrement} handlerD={handleDecrement} stock={counter} />
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
              <DeleteImage handler={deleteIMG} images={form.images} />
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
