//React
import { useEffect, useState, React } from "react";
//Estilos
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
import "../StockButton/stockButton.css";
//Servicios
import putProducts from "../../utils/putProducts";
import getProductById from "../../utils/getProductById";
// Componentes
import EditProduct from "../EditProduct/EditProduct";
//Sweet Alert
import swal from "sweetalert";
//React Router
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Form from "../Form/Form";
function EditForm() {
  const navigate = useNavigate();
  // Tomo el parametro de la url para identificar el productos
  const id = useParams().id;
  console.log(id);

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
  //Llamado a la api
  useEffect(() => {
    async function get() {
      await getProductById(id).then((re) => {
        if (re.status === 404) {
          swal({
            title: re.error,
            icon: "error",
          }).then(() => navigate("/"));
        } else {
          setform(re);
          // setCounter(re.stock);
        }
      });
    }
    get();
  }, []);

  // Defino qué petición haré con el formulario en esta pagina.
  const Save = async (e, formulario) => {
    e.preventDefault();
    let resp = await putProducts(formulario);

    if (resp.status === 200) {
      swal({
        title: "El producto ha sido actualizado",
        icon: "success",
      }).then(() => navigate("/products"));
    } else {
      swal({
        title: "Ha ocurrido un error, no se pudo modificar el producto.",
        icon: "error",
      });
    }
  };
  console.log("editform: ", form);

  return (
    <>
      <div className="cont">
        {/* <EditProduct
          img={form.images[0]}
          name={form.title}
          stock={form.stock}
          valor={form.price}
          alt={form.title}
        /> */}
        <Form Save={Save} formu={form} id={id} />
      </div>
    </>
  );
}

export default EditForm;
