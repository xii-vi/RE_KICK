import './App.css';
import { Homepage,ProductListing,Login,Signup,Cart,Wishlist } from './pages';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './utilities/scrollToTop';
function App() {
  return (
    <div>
      <ScrollToTop />
      <ToastContainer
          position='top-right'
          autoClose={1500}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={5}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
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

