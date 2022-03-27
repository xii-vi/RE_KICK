import { useContext, createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const[resp,setResp]=useState([]);
    useEffect(() => {
    axios.get("/api/products").then(response=>{
    setResp(response.data.products)
    })
    }, [])

  return (
    <CartContext.Provider value={{ resp,setResp }}>
    {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };