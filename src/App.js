import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Routes, Route } from "react-router-dom";
import { ProductListing } from './pages/product/productListing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-listing/*" element={<ProductListing />} />
      </Routes>
      
    </div>
  );
}

export default App;

