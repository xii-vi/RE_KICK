import { Link , useNavigate} from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import { updateCartItem } from "../../apis/apis"
import { useState } from "react";

export const ProductCard = (product)=>{
const [cartClicked, setCartClicked] = useState(false);
const navigate = useNavigate();   
const {authState:{userLogin,token}} = useAuth();
const {cartDispatch} = useCart();
const item = product.singleProduct

const addToCartHandler =()=>{
    setCartClicked(true);
    if(userLogin){
    cartDispatch({type:"ADD_TO_CART", payload:item})
    updateCartItem(item,token);
    }else{   
    navigate("/login") 
    }
}
const goToCartHandler = ()=>{
    navigate("/cart")
}
return(
<>
<Link to="/product-listing"> 
<div class="card-wrapper">
    <div class="card-img">
        <img src={item.image} alt={item.model} />
        <div class="p-3">
            <small>{item.brand}</small>
            <p class="bold-text">{item.model}</p>
            <small>₹ {item.price}</small>
        </div>
        {item.status !== "" && <div class="card-badge p-2">{item.status}</div>}
        <div class="card-badge p-2 rating">{item.rating}</div>
        <button className={cartClicked ? "hidden":"btn btn-primary"} onClick={addToCartHandler}>Add to cart</button>
        <button className={cartClicked ?"btn btn-primary": "hidden"}><Link to="/cart">Go to cart</Link></button>
    </div>
</div>
</Link>
</>
)
}
