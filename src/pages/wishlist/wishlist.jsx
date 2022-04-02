import { useCart } from "../../context/cartContext";
import { WishlistItem } from "../../component/card/wishlistCard";

export const Wishlist = () => {
const {
wishlistState: { wishlistItem },
} = useCart();
return (
<>
    {wishlistItem.length === 0 ? (
        <div className="heading h2">No Items in the Wishlist</div>
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