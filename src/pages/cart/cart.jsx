import { CartProductCard } from "../../component/card/cartProductCard";
import { CheckoutCard } from "../../component/card/checkoutCard";
import { useCart } from "../../context/cartContext";
import "./cart.css"
export const Cart = ()=>{
    const {cartState:{cartItem}}= useCart();
    return(
        <>
        <h2 className="text-center pt-4">MY CART ({cartItem.length})</h2>
        <div className="cart-container">
        <div>{cartItem.map(item=>
        <CartProductCard singleP={item}/>)}</div>
        <div><CheckoutCard /></div>
        </div>
        </>
)
}