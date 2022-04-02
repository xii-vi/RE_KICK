import { useContext, createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {FilterReducer} from "../reducer/filterReducer"
import { addToCartReducer } from "../reducer/cartReducer"
import { wishlistReducer } from "../reducer/wishlistReducer"
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const[resp,setResp]=useState([]);
    useEffect(() => {
    axios.get("/api/products").then(response=>{
    setResp(response.data.products)
    })
    }, [])
    const [state,dispatch]=useReducer(FilterReducer,{
      category: "",
      sortBy: "",
      gender: "",
      priceRange: 50000,
      rating: 1,
      brand: "",
    });
    const {
      cart,
      wishlist
    } = JSON.parse(localStorage.getItem("userData")) || {
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
    <CartContext.Provider value={{ resp,setResp,state,dispatch,cartDispatch,cartState,wishlistState, wishlistDispatch }}>
    {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };