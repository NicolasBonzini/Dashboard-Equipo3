//React
import { useRef, useState, useEffect } from "react";
//React router
import { Link } from "react-router-dom";
//Componentes
import ProductCard from "../../../components/ProductCard/ProductCard";
import Header from "../../../components/Header/Header.js";
import ContentContainer from "../../../components/ContentContainer/ContentContainer";
import Button from "../../../components/Button/Button";
import MainContainer from "../../../components/MainContainer/MainContainer";
//Css
import "../../../components/MainContainer/mainContainer.css";
import "../../../components/Filter/filter.css";
import "./productList.css";
//Servicios
import getProducts from "../../../utils/getProducts";

function ProductList() {
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const inputSearch = useRef(null);
  const selectCategory = useRef(null);
  const minInput = useRef(null);
  const maxInput = useRef(null);

  function searchProducts(e) {
    e?.preventDefault();
    Filtros(products);
  }

  function cleanInput() {
    inputSearch.current.value = "";
    selectCategory.current.value = "";
    minInput.current.value = "";
    maxInput.current.value = "";
    setProductsFilter(products);
  }

  //Filtros
  function Filtros(products) {
    let condiciones = [
      inputSearch.current.value,
      selectCategory.current.value,
      minInput.current.value,
      maxInput.current.value,
    ];
    const [search, select, min, max] = condiciones;
    setProductsFilter(
      products.filter(
        (x) =>
          x.title.toLowerCase().includes(search.toLowerCase()) &&
          (x.category.includes(select) || x.category === "") &&
          x.price >= Number(min) &&
          (!max || x.price <= Number(max))
      )
    );
  }

  function handlerSearchBar() {
    if (window.screen.width <= 500) setIsVisibleInput(!isVisibleInput);
  }

  useEffect(() => {
    getProducts().then((data) => {
      setProductsFilter(data);
      setProducts(data);
      setAllCategory([
        ...new Set(
          data.map((item) =>
            item.category === "" ? "Sin categoria" : item.category
          )
        ),
      ]);
    });
  }, []);

  return (
    <ContentContainer className="productList ">
      <Header>
        {!isVisibleInput && (
          <Link className="title title_special" to="/products">
            Productos
          </Link>
        )}
        <div className="headerGroup">
          <i
            onClick={handlerSearchBar}
            className={`fa-regular fa-x ${
              isVisibleInput ? "setVisible xVisible" : " "
            }`}
          ></i>
          <div className="formContainer">
            <form onSubmit={searchProducts}>
              <input
                name="search"
                type="search"
                ref={inputSearch}
                onChange={searchProducts}
                className={isVisibleInput ? "setVisible inputVisible" : ""}
                placeholder="Buscar productos"
              ></input>

              <i
                onClick={() => {
                  return inputSearch.current.value
                    ? searchProducts()
                    : handlerSearchBar();
                }}
                className={`fa-solid fa-magnifying-glass
                ${isVisibleInput ? "inputSearchOpen" : ""}`}
              ></i>
            </form>
            {!isVisibleInput && (
              <Link to="/products/new">
                {!isVisibleInput && (
                  <Button text="+" personalClass="mobileAdd"></Button>
                )}
                <Button
                  text="Agregar Producto"
                  personalClass="desktopAdd"
                ></Button>
              </Link>
            )}
          </div>
        </div>
      </Header>
      <MainContainer>
        <div className="header_top">
          {/* filtros */}

          <div className="filter">
            <select
              ref={selectCategory}
              onChange={searchProducts}
              name="category"
              id="category"
              
            >
              <option value="">Categorías</option>
              {allCategory?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <label className="price_filter">Precio: </label>
            <div className="filter-inputs-div">
              <input
                ref={minInput}
                min="0"
                onChange={searchProducts}
                name="category"
                id="category"
                type="number"
                placeholder="Min"
              />
              <input
                ref={maxInput}
                min="0"
                onChange={searchProducts}
                name="category"
                id="category"
                type="number"
                placeholder="Max"
              />
            </div>

            <button className="btn btn-secondary" onClick={cleanInput}>
              Limpiar
            </button>
          </div>

          <div className="products">
            {products.length ? (
              productsFilter.length ? (
                productsFilter.map((product) => (
                  <ProductCard
                    key={product.id}
                    price={product.price}
                    id={product.id}
                    title={product.title}
                    image={product.images[0]}
                  />
                ))
              ) : (
                <p className="header_top containerMain void">
                  No hay coincidencias
                </p>
              )
            ) : (
              <p className="header_top containerMain void">Cargando...</p>
            )}
          </div>
        </div>
      </MainContainer>
    </ContentContainer>
  );
}

export default ProductList;
