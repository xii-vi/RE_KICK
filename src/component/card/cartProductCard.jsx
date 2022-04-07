import {
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
    updateWishlistItem,
    RemoveFromWishlist
  } from "../../apis/apis"
  import { useCart } from "../../context/cartContext"
  import { useAuth } from "../../context/authContext" 
  import { useState } from "react"
  import { useNavigate } from "react-router-dom"
export const CartProductCard = (props)=>{
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const navigate = useNavigate();
  const {
        authState: { userLogin , encodedToken },
      } = useAuth();
  
    const {
      cartDispatch, wishlistDispatch
    } = useCart();

  const data = props.singleProductCard

    const increaseCartHandler = () => {
      cartDispatch({ type: "INCREASE_CART_ITEM", payload: data });
      IncreaseCartQuantity(data, encodedToken);
    };
  
    const decreaseCartHandler = () => {
      cartDispatch({ type: "DECREASE_CART_ITEM", payload: data });
      DecreaseCartQuantity(data, encodedToken);
    };
    const WishlistHandler = () => {
      wishlistClicked ? setWishlistClicked(false) : setWishlistClicked(true);
      
    if (userLogin) {
      if(wishlistClicked===false) 
        {
          wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: data});
          updateWishlistItem(data, encodedToken);
          cartDispatch({ type: "REMOVE_FROM_CART", payload: data });
          RemoveFromCart(data, encodedToken)
      } else {
          wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: data });
          RemoveFromWishlist(data,encodedToken)
      } 
  } else {
    navigate("/login");
  }
};
    const removeFromCartHandler = () => {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: data });
      RemoveFromCart(data, encodedToken)
    }
    if (data.quantity === 0) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: data });
      RemoveFromCart(data, encodedToken);
    }
    return (
        <div className="flex product-container m-4">
                <img className="img-square"
                    src={data.image}
                    alt={data.model} />
                <div className="mx-5 pt-5 pb-2">
                    <small>{data.brand}</small>
                    <p className="py-2">{data.model}</p>
                    <small>$ {data.price}</small>
                    <div className="my-4">
                      {data.quantity === 1 ? (<button className="p-1" onClick={decreaseCartHandler}>
                        <i className="fas fa-trash"></i>
                    </button>):(<button onClick={decreaseCartHandler}><i className="fa fa-minus p-1"></i></button> ) }
                        <span className="text-bold mx-2">{data.quantity}</span>
                        <button onClick={increaseCartHandler}><i className="fa fa-plus p-1"></i></button>
                    </div>
                    <button className="btn btn-cart btn-outline-primary mt-2 mr-2" onClick={WishlistHandler}>
                      <i className="fa fa-heart mr-2"></i>
                        Move to Wishlist</button>
                </div>
            </div>
    )
}