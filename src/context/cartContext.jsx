import { useContext, createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {FilterReducer} from "../reducer/filterReducer"
import { addToCartReducer } from "../reducer/cartReducer"
import { wishlistReducer } from "../reducer/wishlistReducer"
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const[responseData,setResponseData]=useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
    (async ()=>{
    const response = await axios.get("/api/products")
    setResponseData(response.data.products)
    }
    )()
    }, [])


    const [filterState,filterDispatch]=useReducer(FilterReducer,{
      category: "",
      sortBy: "",
      gender: "",
      priceRange: 3000,
      rating: 1,
      brand: "",
      search:""
    });
    const {cart,wishlist} = JSON.parse(localStorage.getItem("userData")) || {
      cart: [],
      wishlist:[],
    }
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
      wishlistItem: wishlist
    });
    const [cartState, cartDispatch] = useReducer(addToCartReducer, {
      productsData: [],
      cartItem:cart
    })
  return (
    <CartContext.Provider value={{ responseData,setResponseData,filterState,filterDispatch,cartDispatch,cartState,wishlistState, wishlistDispatch,isLoading, setIsLoading }}>
    {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };