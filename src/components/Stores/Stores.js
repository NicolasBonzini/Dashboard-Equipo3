//Componentes
import "../CardStartPage/cardStartPage.css";
//Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Stores() {

  return (
    <div className="card-content">
      <div className="card-logo" title="icoStore">
        <FontAwesomeIcon icon={faStore} />
      </div>
      <p className="card-number">1</p>
      <p className="card-text">Tienda</p>
      <div className="card-button-content">
        <button className="card-button" >
          <Link className="link-button" to='/*'>
            Ver Listado
          </Link>
        </button>
        <button className="card-button">
          <Link className="link-button" to='/*'>
            Agregar Tienda
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Stores;
