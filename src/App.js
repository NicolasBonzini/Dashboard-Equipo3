import './App.css';
import { useContext } from 'react';
//React-router
import { Route, Routes } from 'react-router-dom';
//Components
import Home from './pages/home/Home';
import Sidebar from './components/Sidebar';
import Error404 from './pages/Error404/Error404'
import ProductList from './pages/products/productList/ProductList';
import ProductView from './pages/products/productView/ProductView';
import ProductNew from './pages/products/productNew/ProductNew'
import { ThemeContext } from './context/ThemeContext';
import putProducts from './utils/putProducts';

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App dark ${theme}`}>
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
