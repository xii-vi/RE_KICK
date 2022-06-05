import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CartProvider } from "./context/cartContext";
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/authContext";
import { AddressProvider } from "./context/addressContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
    <AddressProvider>
      <App />
    </AddressProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
