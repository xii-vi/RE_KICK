import { useContext, createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {FilterReducer} from "../reducer/filterReducer"
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
  return (
    <CartContext.Provider value={{ resp,setResp,state,dispatch }}>
    {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };