import './App.css';
import { Homepage } from './pages/homepage/homepage';
import { Routes, Route } from "react-router-dom";
import { ProductListing } from './pages/product/productListing';
import { Login } from './pages/login/login';
import { Signup } from './pages/signUp/signup';
import { Cart } from './pages/cart/cart';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Wishlist } from './pages/wishlist/wishlist';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

