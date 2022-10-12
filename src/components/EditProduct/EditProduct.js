//Css
import "../EditProduct/editProduct.css";
//Componente
import Avatar from "../Avatar/Avatar";

const editProduct = (props) => {
  return (
    <div className="editProduct">
      <div className="editProduct__img">
        <img src={props.img} alt={props.alt} />
      </div>

      <div className="editProduct__container">
        <div className="editProduct__name">
          <h2>{props.name.substring(0, 35)}</h2>
        </div>
        <div className="editProduct__info">
          <div className="eachInfo">
            <h2>{props.valor}</h2>
            <div>
              <p>PUNTOS SUPERCLUB</p>
            </div>
          </div>
          <div className="eachInfo">
            <h2>{props.stock}</h2>
            <div>
              <p>STOCK DISPONIBLE</p>
            </div>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default editProduct;
