import { useCart } from "../../context/cartContext";
import { WishlistItem } from "../../component/card/wishlistCard";
import { Link } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
const {
wishlistState: { wishlistItem },
} = useCart();
return (
<>
    {wishlistItem.length === 0 ? (
        <div className="height">
        <h2 className="heading flex center-flex ">No Items in the Wishlist</h2>
        <div className="text-center">
            <Link to="/product-listing">
            <button className="btn btn-primary">See Products</button>
        </Link></div>
        
        </div>
    ) : (
        <div>
            <h2 className="text-center pt-4">MY WISHLIST ({wishlistItem.length})</h2>
            <div className="grid wishlist-section-layout">
            {wishlistItem.map((props) => (
                <WishlistItem item={props} key={props._id} />
                ))}
            </div>
            </div>
    )}
</>
);
};