import { useNavigate, useParams} from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { useState } from "react";
import { RemoveFromWishlist, updateCartItem ,updateWishlistItem } from "../../apis/apis"

export const SingleProductCard = ()=>{
  const [cartClicked, setCartClicked] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false);  
  const navigate =  useNavigate();
  const {authState:{userLogin,encodedToken}} = useAuth();
  const {productId} = useParams();
  const { cartDispatch, wishlistDispatch,responseData,wishlistState:{wishlistItem}} = useCart();
  const product = responseData.find?.(item => item._id === productId);
  const {brand,model,price,description,image} = product ?? {}

  const isProductInWishlist = (productId, wishlistItem) => {
    return wishlistItem.find(({
        _id
    }) => _id === productId)
  }
  const addToCartHandler =()=>{
    if(userLogin){
    setCartClicked(true);
    cartDispatch({type:"ADD_TO_CART", payload:product})
    updateCartItem(product,encodedToken);
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
const wishlistHandler =()=>{
    if(userLogin)
    {
        wishlistClicked ? setWishlistClicked(false) : setWishlistClicked(true);
        if(isProductInWishlist(productId, wishlistItem))
        {
        RemoveFromWishlist(product,encodedToken)
        }
        else{
        wishlistDispatch({type:"ADD_TO_WISHLIST", payload:product})
        updateWishlistItem(product,encodedToken);
        }
      }
      else{   
        navigate("/login") 
        }
}
    return(
    <>
      <div className="grid-40-60-layout p-4 m-4">
        <div className="card-img flex">
        <img src={image} alt={model} />
      </div>
      <div className="horizontal-card-text-content flex flex-direction-col p-5">
        <div className="py-5 px-5">
            <small className="py-2">{brand}</small>
            <h4 className="m-0 py-2">{model}</h4>
            <small className="py-2">$ {price}</small>
        </div>
        <div className="px-5">
        <p className="text-card-content py-5">{description}</p>

        </div>
        <div className="px-5">
          <span className="pr-5 single-page-button">
            <button className={cartClicked ? "hidden":"btn btn-primary "} onClick={addToCartHandler}>Add to cart <i className="fas fa-shopping-cart px-2"></i></button>
            <button className={cartClicked ?"btn btn-primary": "hidden"} onClick={goToCartHandler}>Go to cart <i className="fas fa-arrow-circle-right px-2"></i></button>
          </span>
            <span className="single-page-button">
            <button className={wishlistClicked ? "hidden":"btn btn-secondary "} onClick={wishlistHandler}>Add to Wishlist <i className="far fa-heart px-2"></i></button>
            <button className={wishlistClicked ?"btn btn-secondary": "hidden"} onClick={wishlistHandler}>Remove from Wishlist <i className="fas fa-heart px-2"></i></button>
            </span>
        </div>
      </div>
      </div>
    </> 
    )
}