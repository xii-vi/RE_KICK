import { Link , useNavigate} from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";
import { updateCartItem ,updateWishlistItem } from "../../apis/apis"
import { useState } from "react";

export const ProductCard = (product)=>{
const [cartClicked, setCartClicked] = useState(false);
const [wishlistClicked, setWishlistClicked] = useState(false);
const navigate = useNavigate();   
const {authState:{userLogin,encodedToken}} = useAuth();
const {cartDispatch,wishlistDispatch} = useCart();
const item = product.singleProduct
const addToCartHandler =()=>{
    
    if(userLogin){
    setCartClicked(true);
    cartDispatch({type:"ADD_TO_CART", payload:item})
    updateCartItem(item,encodedToken);
    }else{  
    navigate("/login") 
    }
}
const goToCartHandler =()=>{
    if(userLogin){
        navigate("/cart")
    }
    else{   
        navigate("/login") 
        }
}
const wishlistHan =()=>{
    if(userLogin){
        wishlistClicked ? setWishlistClicked(false) : setWishlistClicked(true);
        wishlistDispatch({type:"ADD_TO_WISHLIST", payload:item})
        updateWishlistItem(item,encodedToken);
        }else{   
        navigate("/login") 
        }
}
return(
<Link to={`/products/${item._id}`}><div className="card-wrapper">
    <div className="card-img">
        <img src={item.image} alt={item.model} />
        <div className="p-3">
            <small>{item.brand}</small>
            <p className="bold-text">{item.model}</p>
            <small>$ {item.price}</small>
        </div>
        {item.status !== "" && <div className="card-badge p-2">{item.status}</div>}
    </div>
</div>
</Link>
)
}
