import { useContext, createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {FilterReducer} from "../reducer/filterReducer"
import { addToCartReducer } from "../reducer/cartReducer"
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
      cart
    } = JSON.parse(localStorage.getItem("userData")) || {
      cart: []
    }
  
    const [cartState, cartDispatch] = useReducer(addToCartReducer, {
      productsData: [],
      cartItem:cart
    })
  return (
    <CartContext.Provider value={{ resp,setResp,state,dispatch,cartDispatch,cartState }}>
    {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };