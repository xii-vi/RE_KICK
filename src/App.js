import './App.css';
import { Homepage,ProductListing,Login,Signup,Cart,Wishlist,Error,ProductPage,UserPage,UserProfile,AddressPage,OrderPage,OrderDetails } from './pages';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './utilities/scrollToTop';
import { RequiresAuth } from './utilities/requiredAuth';
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
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route element={<RequiresAuth />}>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPage />} />
          <Route path="/profile" element={<UserPage />} >
              <Route index element={<UserProfile />} />
              <Route path="address" element={<AddressPage />} />
              <Route path="orderDetails" element={<OrderDetails />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

