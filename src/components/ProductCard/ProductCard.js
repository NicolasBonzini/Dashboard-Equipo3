//Componentes
import "../../pages/products/productView/ProductView";
//Css
import "../ProductCard/productCard.css";
//React router
import { NavLink } from "react-router-dom";
//Images
import arrowImg from "../../assets/images/chevron-right.svg";
import Img from "../../assets/images/notImage.png";

function ProductCard(props) {
  const handleDigitCount = () => {
    if (props.id.toString().length === 1) {
      return `#00${props.id}`;
    } else if (props.id.toString().length === 2) {
      return `#0${props.id}`;
    } else {
      return `#${props.id}`;
    }
  };

  return (
    <div aria-label='productCard' role='list-item' className="productCard containerMain">
      <NavLink className="productCardLink" to={"/product/" + props.id}>
        <section className="productCardInfo">
          <figure className="productCardImg">
            <img
              className={props.image ? "" : "not_image_center"}
              src={props.image || Img}
              alt={props.title}
            ></img>
          </figure>
          <div className="productCardTexts">
            <h4 className="productCardTitle">{props.title}</h4>
            <div className="product_subtitle">
              <p className="productCardCode">{handleDigitCount()}</p>
              <p className="productCardCode" aria-label="priceParagraph" role='paragraph'>${props.price}.00</p>
            </div>
          </div>
        </section>
        <figure className="productArrowImg">
          <img src={arrowImg} alt="Arrow Icon"></img>
        </figure>
      </NavLink>
    </div>
  );
}

export default ProductCard;
