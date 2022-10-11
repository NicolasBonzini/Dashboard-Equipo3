import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, React } from "react";

//Estilos
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
//Servicios
import putProducts from "../../utils/putProducts";
import getProductById from "../../utils/getProductById";
// Componentes
import EditProduct from "../EditProduct/EditProduct";
import Input from "../Input/Input";
import Stock from "../Stock/Stock";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import DeleteImage from "../DeleteImage/DeleteImage";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

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
  const [image, setImg] = useState('');
  //Llamado a la api
  useEffect(() => {
    async function get() {
      await getProductById(id).then((re) => {
        setform(re);
        setCounter(re.stock);
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
          // FIN STOCK //

    // HANDLERS

          //IMAGENES//
  // Actualizo / Elimino las imagenes
  const handleImg = (e)=>{
    setImg(e.target.value);
  }

  const deleteIMG = (e)=>{
    e.preventDefault();
    swal({
      title: 'Imagen eliminada',
      icon: 'success'
    })
    const deletedUrl = e.target.value
    let imagesForm = form.images.filter(image => image !== deletedUrl)
    setform({...form, images:imagesForm,})
  }

  function prueba(e){
    e.preventDefault();
    if(image.length>0){
      form.images.push(image);
      setform({...form});
    }
    setImg('');
  }
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
    let resp = await putProducts(form);
    console.log(resp);
    if (resp.status === 200) {
         swal({
      title: 'El producto ha sido actualizado',
      icon: 'success'
    }).then( () => navigate('/products'));
    } else {
        swal({
      title: 'Ha ocurrido un error, no se pudo modificar el producto.',
      icon: 'error'
    })
    }
  };

  const handleCancel = (e)=>{
    e.preventDefault();
    swal({
      title: 'El producto no ha sido actualizado',
      icon: 'error'
    })
    async function get() {
      await getProductById(id).then((re) => {
        setform(re);
        setCounter(re.stock);
      });
    }
    get();

  }
  

  return (
    <>
      <div className="cont">
        
        <EditProduct
          img={form.images[0]}
          name={form.title}
          stock={form.stock}
          valor={form.price}
        />
        <div className="productView">
          <form className="newForm" action="">
            <div>
              <h2>Información</h2>
              <Input
                tipo="text"
                name="title"
                id="title"
                label="Nombre"
                value={form.title}
                handler={handleInput}
              />
              <Input
                tipo="number"
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
              <div className="addImg">

                <Input
                  refe='img'
                  tipo="text"
                  name="image"
                  id="image"
                  value={image}
                  label="Nueva Imagen"
                  handler={handleImg}
                  />
                  <Button 
                    text='Añadir'
                    handler={prueba}
                  />
              </div>
              <DeleteImage handler={deleteIMG} images={form.images} />
            </div>

            {/* cancelar o enviar formulario */}
            <div className="sendForm">
              <button onClick={handleCancel}>Cancelar</button>
              <button onClick={handleSave}>Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditForm;


// En esta oportunidad, utilicé la liberia de sweetalert para enviar mensajes personalizados al usuario
// https://sweetalert.js.org/guides/
// - sdelrive