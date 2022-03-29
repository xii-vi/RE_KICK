import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Routes, Route } from "react-router-dom";
import { ProductListing } from './pages/product/productListing';
import { Login } from './pages/login/login';
import { Signup } from './pages/signUp/signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
    </div>
  );
}

export default App;

