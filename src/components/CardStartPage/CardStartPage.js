//CSS
import "../../components/CardStartPage/cardStartPage.css";
//Font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
//React router
import { Link } from "react-router-dom";

const CardStartPage = ({ listProd }) => {
  // const navigate = useNavigate();

  // const handleListProducts = () => {
  //   navigate("/products");
  // };

  // const handleAddProducts = () => {
  //   navigate("/products/new");
  // };

  return (
    <div className="card-content">
      <div className="card-logo">
        <FontAwesomeIcon title="ico" icon={faBoxOpen} />
      </div>
      <p className="card-number" title="countProducts">{listProd}</p>
      <p className="card-text">Productos</p>

      <div className="card-button-content">
        <Link className="card-button" to='/products'>
          Ver Listado
        </Link>
        <Link className="card-button" to='/products/new'>
          Agregar Producto
        </Link>
      </div>
      
    </div>
  );
};

export default CardStartPage;
