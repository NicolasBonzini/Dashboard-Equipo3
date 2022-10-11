import React from "react";
import "../DeleteImage/deleteImage.css";

const DeleteImage = ({ images, handler,alt }) => {
  return (
    <div className="eachInput">
      <label>Imágenes actuales</label>
      {images.map((image, id) => {
        return (
          <div key={id + image} className="formImgs">
            <div className="formImgs-img">
              <img src={image} alt={alt} />
              <div className="urlContainer">
                <p>{image.substring(0,100)}</p>
              </div>
            </div>
            <button onClick={handler} value={image} className="quitar">
              Quitar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteImage;
