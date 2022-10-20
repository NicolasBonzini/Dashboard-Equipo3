/* istanbul ignore file */

const addProduct = async (form) => {
  const res = await fetch("http://localhost:5000/api/product", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(form),
  });

  return res;
};

export default addProduct;
