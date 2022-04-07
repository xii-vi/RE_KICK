import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import {
  RemoveFromWishlist,
  updateCartItem,
} from "../../apis/apis"

export const WishlistItem = (props) => {
    const {authState: { encodedToken },} = useAuth();
    const { wishlistDispatch, cartDispatch } = useCart();
    const item = props.item;
    const removeFromWishlistHandler = () => {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
        RemoveFromWishlist(item,encodedToken)
    }
    const addToCardHandler = () => {
        cartDispatch({ type: "ADD_TO_CART", payload: item });
        updateCartItem(item, encodedToken);
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
        RemoveFromWishlist(item,encodedToken)
        }
    return(
    <div>
        <div className="card-wrapper">
            <div className="card-img">
                <img src={item.image} alt={item.model} />
                <div className="p-3">
                    <small>{item.brand}</small>
                    <p className="bold-text">{item.model}</p>
                    <small>$ {item.price}</small>
                </div>
                <div>
                    <button className="btn btn-primary product-card-button" onClick={addToCardHandler}><i className="fa fa-shopping-bag mr-4"></i>Move to bag</button>
                    </div>
                    <div className="pt-5">
                    <button className="btn btn-primary product-card-button" onClick={removeFromWishlistHandler}><i className="fa fa-heart mr-4"></i>Remove from Wishlist</button>
                </div>
            </div>
        </div>
    </div>
        )
    }