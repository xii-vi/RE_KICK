import './App.css';
import { Homepage,ProductListing,Login,Signup,Cart,Wishlist } from './pages';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';

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

