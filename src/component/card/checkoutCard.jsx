import { useAddress } from "../../context/addressContext";
import { useCart } from "../../context/cartContext";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
export const CheckoutCard=({addressData})=>{
    const {addressDispatch,addressList} = useAddress();
    const {cartState: { cartItem },cartDispatch} = useCart();
    const navigate = useNavigate();

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

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    } 
    const displayRazorpay = async (e) => {
        e.preventDefault();
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('razor pay sdk failed')
            return
        }
        const options = {
            key: "rzp_test_npke5xpZFFZbZu",
            amount: finalPrice*100*50,
            currency: "INR",
            name: "RE-KICKS",
            description: "Get your grails.",
            handler: ({ razorpay_payment_id }) => {
                addressDispatch({
                    type: "ADD_ORDERS",
                    payload: {
                        orderId: uuid(),
                        paymentId: razorpay_payment_id,
                        address: addressList,
                        products: [...cartItem],
                    }
                });
                cartDispatch({type:"INITIAL_CART",payload:[]})
                navigate("/order")
            },
            prefill: {
                contact: "9784514780",
                email: "testuser@gmail.com",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return(
        <>
        <div className="price-container m-4">
            <div className="card-wrapper-checkout">
                <div className="flex space-bw">
                    <p className="p-3">Subtotal</p>
                    <p className="p-3">${price}</p>
                </div>
                <hr />
                <div className="m-2">
                    <div className="text-bold">Shipping to : {addressData.length === 0 ?<p>Add Shipping Address</p>:
                    addressData.map(address=>{
                        return(
                        <div key ={address._id}>
                            <p>{address.home}</p>
                            <p>{address.state} {address.country}</p>
                            <p>{address.pinCode}</p>
                        </div>
                        )
                    })}</div>
                    
                    <li className="text-bold py-2">Free shipping</li>
                </div>
                <hr />
                <div className="flex space-bw">
                    <p className="h4 p-3 text-bold">Total</p>
                    <p className="h4 p-3 text-bold">${finalPrice}</p>
                </div>
                {addressData.length === 0?"":<button className="btn btn-cart btn-primary mt-2" onClick={displayRazorpay}>Checkout</button>}
            </div>
        </div>
        </>
    )
}
