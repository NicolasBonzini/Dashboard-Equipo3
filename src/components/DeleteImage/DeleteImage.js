//Css
import "../DeleteImage/deleteImage.css";

const DeleteImage = (props) => {
  return (
    <div className="eachInput">
      <label>Imágenes actuales</label>
      {props.images.map((image, id) => {
        return (
          <div key={id + image} className="formImgs">
            <div className="formImgs-img">
              <img src={image} alt={props.alt} />
              <div className="urlContainer">
                <p>{image.substring(0, 100)}</p>
              </div>
            </div>
            <button onClick={props.handler} value={image} className="quitar">
              Quitar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteImage;
