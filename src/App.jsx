import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import SellerRegister from "./pages/seller/SellerRegister";
import SellerDashboard from "./pages/seller/SellerDashboard";
import Categories from './pages/Categories';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/user/Home';
import AddProduct from "./pages/seller/AddProduct";

function App() {


  return (
    <>
       <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/seller/products/new" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;