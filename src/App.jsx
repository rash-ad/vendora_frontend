import './App.css'
import Navbar from './components/Navbar'
import Shop from './pages/Shop';
import SellerRegister from "./pages/SellerRegister";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
     <Navbar/>
      
      
       <Routes>
                <Route path="/seller/register" element={<SellerRegister />} />
               

      </Routes>
      <Routes>
       <Route path="/shop" element={<Shop/>} />

      </Routes>
      
    </>
  )
}

export default App
