//Componentes
import Input from "../Input/Input";
import Stock from "../StockButton/Stock";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import DeleteImage from "../DeleteImage/DeleteImage";
import Button from "../Button/Button";

//React
import { useEffect, useState, React } from "react";
//Estilos
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
//Sweet Alert
import swal from "sweetalert";

const Form = (props) => {
  // Estado del formulario
  const [form, setform] = useState(props.formu);
  const [image, setImg] = useState("");
  // Actualizo el formulario
  useEffect(() => {
    setform(props.formu);
  }, [props.formu]);

  // Input handlers
  const handleInput = (e) => {
    if (e.target.name == "price" && e.target.name.length > 0) {
      setform({
        ...form,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setform({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

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
  function handlerAdd(e) {
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
  }

  //Funciones incremento y decremento de stock
  const handleDecrement = (e) => {
    e.preventDefault();
    if (form.stock > 0) {
      setform({
        ...form,
        stock: Number(form.stock) - 1,
      });
    }
  };
  const handleIncrement = (e) => {
    e.preventDefault();
    setform({
      ...form,
      stock: Number(form.stock) + 1,
    });
  };

  // Save //
  const handleSave = (e) => {
    return props.Save(e, form);
  };

  // Cancelar //
  const handleCancel = (e) => {
    e.preventDefault();
    swal({
      title: "El producto no ha sido actualizado",
      icon: "error",
    });
    setform(props.formu);
    console.log(props.formu);
  };

  console.log(form);

  return (
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
            // handleStock={handleStock}
            stock={form.stock}
          />
          <TextArea value={form.description} handler={handleInput} />
          <Select />
        </div>
        <div>
          <h2>Galeria de Imágenes</h2>
          <div className="addImg">
            <Input
              refe="img"
              tipo="text"
              name="image"
              id="image"
              value={image}
              label="Nueva Imagen"
              handler={handleImg}
            />
            <Button text="Añadir" handler={handlerAdd} />
          </div>
          <DeleteImage
            alt={form.title}
            handler={deleteIMG}
            images={form.images}
          />
        </div>

        <div className="sendForm">
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
