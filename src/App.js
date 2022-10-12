//React
import { useContext, useRef, useEffect } from "react";
//React-router
import { Route, Routes } from "react-router-dom";
//Components
import "./App.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Error404 from "./pages/Error404/Error404";
import ProductList from "./pages/products/productList/ProductList";
import ProductView from "./pages/products/productView/ProductView";
import ProductNew from "./pages/products/productNew/ProductNew";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const bodyRef = useRef();

  useEffect(() => {
    bodyRef.current = document.querySelector("body");
    if (theme == "dark") {
      bodyRef.current.classList.add("dark");
    } else {
      bodyRef.current.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/products/new" element={<ProductNew />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
