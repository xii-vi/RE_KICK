import { CartProductCard } from "../../component/card/cartProductCard";
import { CheckoutCard } from "../../component/card/checkoutCard";
import { useCart } from "../../context/cartContext";
import "./cart.css"
import { useAddress } from "../../context/addressContext";
import { AddressPage } from "../addressPage/addressPage";
import { Link } from "react-router-dom";
export const Cart = ()=>{
    const { selectedAddressData } = useAddress();
    const {cartState:{cartItem}}= useCart();
    return(
        <>
        {  cartItem.length === 0 ? (
        <div className="height">
            <h2 className="heading flex center-flex" > Please Add Items in the Cart</h2>
        <Link to="/product-listing">
            <div className="text-center">
            <button className="btn btn-primary ">See Products</button>
            </div>
        </Link>
        </div>
        ) : (
        <>
        <h2 className="text-center pt-4">MY CART ({cartItem.length})</h2>
        <div className="cart-container">
        <div>
            <AddressPage />
            <div>{cartItem.map(item=>
                <CartProductCard singleProductCard={item} key={item._id}/>)}
            </div>
        </div>
        <div><CheckoutCard addressData = {selectedAddressData}/></div>
        </div>
        </>
        )
}
        </>
)
}