import logo from './logo.svg';
import './App.css';
//React-router
import { Route, Routes } from 'react-router-dom';
//Components
import Home from './pages/home/Home';
import Sidebar from './components/Sidebar';
import Error404 from './pages/Error404/Error404'
import ProductList from './pages/products/productList/ProductList';
import ProductView from './pages/products/productView/ProductView';
import ProductNew from './pages/products/productNew/ProductNew'
//Css

function App() {
  return (
    <div className="App">
      
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
