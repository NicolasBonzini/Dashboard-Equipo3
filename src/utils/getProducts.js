/* istanbul ignore file */
//Sweet alert

import swal from "sweetalert";

const url = "http://localhost:5000/api/product";

const getProducts = async () => {
  let dataApi = await fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    .then((data) => data)
    .catch((error) =>
      swal(
        `Error ${error.status} ${error.statusText}: No se pudieron cargar los productos!`
      )
    );

  return dataApi;
};

export default getProducts;
