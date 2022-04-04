import { useCart } from "../../context/cartContext";
export const CheckoutCard=()=>{
    const {
        cartState: { cartItem },
    } = useCart();
    const calculateTotalPrice = (cartItem) => {
        return  cartItem.reduce((totalPrice, product) => {
            return {
                sum: (product.price) * (product.quantity) + (totalPrice.sum)
            }
        }, { sum: 0 })
    }
    const totalPrice = calculateTotalPrice(cartItem);
    const price = totalPrice.sum;
    const finalPrice = price.toFixed(2);
    return(
        <>
        {  cartItem.length === 0 ? (
            <h2 className="heading"> Please Add Items in the Cart</h2>
        ) : 
        (
        <div className="price-container m-4">
            <div className="card-wrapper">
                <div className="flex space-bw">
                    <p className="p-3">Subtotal</p>
                    <p className="p-3">${price}</p>
                </div>
                <hr />
                <div className="m-2">
                    <p>Shipping</p>
                    <li className="text-bold py-2">Free shipping</li>
                </div>
                <hr />
                <div className="flex space-bw">
                    <p className="h4 p-3 text-bold">Total</p>
                    <p className="h4 p-3 text-bold">${finalPrice}</p>
                </div><button className="btn btn-cart btn-primary mt-2">Checkout</button>
            </div>
        </div>
        )
        }
        </>
    )
}
