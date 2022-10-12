//Componentes
import Input from "../Input/Input";
import Stock from "../StockButton/Stock";
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import DeleteImage from "../DeleteImage/DeleteImage";
import Button from "../Button/Button";

const Form = (props) => {
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
            value={props.form.title}
            handler={props.handleInput}
          />
          <Input
            tipo="number"
            name="price"
            id="price"
            label="Valor"
            value={props.form.price}
            handler={props.handleInput}
          />
          <Stock
            handlerI={props.handleIncrement}
            handlerD={props.handleDecrement}
            handleStock={props.handleStock}
            stock={props.counter}
          />
          <TextArea
            value={props.form.description}
            handler={props.handleInput}
          />
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
              value={props.image}
              label="Nueva Imagen"
              handler={props.handleImg}
            />
            <Button text="Añadir" handler={props.prueba} />
          </div>
          <DeleteImage
            alt={props.form.title}
            handler={props.deleteIMG}
            images={props.form.images}
          />
        </div>

        <div className="sendForm">
          <button onClick={props.handleCancel}>Cancelar</button>
          <button onClick={props.handleSave}>Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
