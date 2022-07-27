import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { RemoveFromWishlist, updateCartItem ,updateWishlistItem } from "../../apis/apis"
import { isItemInCart, isItemInWishlist } from "../../utilities/helperFunction";
import { useDocumentTitle } from "../../utilities/documentTitle";

export const SingleProductCard = ({productId:ID})=>{
  const navigate =  useNavigate();
  const {authState:{userLogin,encodedToken}} = useAuth();
  const { cartDispatch, wishlistDispatch,responseData,wishlistState:{wishlistItem},cartState:{cartItem}} = useCart();
  const product = responseData.find?.(item => item._id === ID);
  const {brand,model,price,description,image,id} = product ?? {}
  useDocumentTitle(model);
  const addToCartHandler =()=>{
    if(userLogin){
    cartDispatch({type:"ADD_TO_CART", payload:product})
    updateCartItem(product,encodedToken);
    }
    else{
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
        if(isItemInWishlist(id,wishlistItem))
        {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
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
            <button className={isItemInCart(id,cartItem) ? "hidden":"btn btn-primary "} onClick={addToCartHandler}>Add to cart <i className="fas fa-shopping-cart px-2"></i></button>
            <button className={isItemInCart(id,cartItem) ?"btn btn-primary": "hidden"} onClick={goToCartHandler}>Go to cart <i className="fas fa-arrow-circle-right px-2"></i></button>
          </span>
            <span className="single-page-button">
            <button className={isItemInWishlist(id,wishlistItem) ? "hidden":"btn btn-secondary "} onClick={wishlistHandler}>Add to Wishlist <i className="far fa-heart px-2"></i></button>
            <button className={isItemInWishlist(id,wishlistItem) ?"btn btn-secondary": "hidden"} onClick={wishlistHandler}>Remove from Wishlist <i className="fas fa-heart px-2"></i></button>
            </span>
        </div>
      </div>
      </div>
    </> 
    )
}