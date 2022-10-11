import React, { useEffect, useState } from "react";
import getProducts from "../../utils/getProducts";
import CardStartPage from "../CardStartPage/CardStartPage";
import Stores from "../Stores/Stores";

function HomeContent() {
  const [totProducts, setTotProducts] = useState(0);

  useEffect(() => {
    getProducts().then((data) => setTotProducts(data.length));
  }, []);

  return (
    <div className="homeContent header_top containerMain">
      <CardStartPage listProd={totProducts} />
      <Stores />
    </div>
  );
}

export default HomeContent;
