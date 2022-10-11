import "../CardStartPage/cardStartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Stores() {
  const navigate = useNavigate();

  const handleListStores = () => {
    navigate("/stores");
  };

  const handleAddStores = () => {
    navigate("/stores/new");
  };

  return (
    <div className="card-content">
      <div className="card-logo">
        <FontAwesomeIcon icon={faStore} />
      </div>
      <p className="card-number">1</p>
      <p className="card-text">Tienda</p>
      <div className="card-button-content">
        <button className="card-button" onClick={handleListStores}>
          Ver Listado
        </button>
        <button className="card-button" onClick={handleAddStores}>
          Agregar Tienda
        </button>
      </div>
    </div>
  );
}

export default Stores;
