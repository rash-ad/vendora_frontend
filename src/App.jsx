import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
function App() {
const product = {
  name: "Wireless Headphones",
  price: 4500,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW358BdQSXX14ArcM3IAVcgtYr_M6MRaQpvUYZunQCeg&s=10",
  
};
  return (
    <>
  
     <Navbar />
      <ProductCard product={product} />
      <ProductCard product={product} />
    </>
  )
}

export default App
