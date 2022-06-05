import { Link } from "react-router-dom";
import { useAddress } from "../../context/addressContext";
import "./orderDetails.css"
export const OrderDetails =()=>{
    const{orders} = useAddress();
    return(
        <>
        {orders.length===0?
        <div className="text-center">
            <p className="h4 py-5">Place an order to See Order Details</p>
            <Link to="/product-listing">
                <button className="btn btn-primary">See Products</button>
            </Link>
            </div>:
        <div className="p-4">
        {
        orders.map(orderDetails=>{
        return(
            < div key={orderDetails.paymentId} >
                <div >
                <div className="flex order-details my-2 p-4">
                    <p>OrderID: <small className="text-card-content">{orderDetails.orderId}</small></p>
                    <p>PaymentID: <small className="text-card-content">{orderDetails.paymentId}</small></p>
                </div>

                    {orderDetails.products.map(order=>{
                    return(
                        <div key={order._id} className='flex center-flex order-details pb-5 mb-5'>
                        <div><img className="img-square"src={order.image} alt={order.model}/>
                        </div>
                        <div className="p-4">
                        <small>{order.brand}</small>
                        <Link to={`/products/${order._id}`}><p className="text-bold">{order.model}</p></Link>
                        </div>
                        <div>
                        <p>Est. delivery: 8 Days</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Bill Amount: $ {order.price}</p>
                        </div>
                        </div>
                            )
                            })}
                </div>
            </div>
                    )
                })
            }
        </div>
        }
        </>
    )
}