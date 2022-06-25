import { Link } from "react-router-dom"
import { useDocumentTitle } from "../../utilities/documentTitle"

export const OrderPage = ()=>{
    useDocumentTitle("Order Details")
    return(
        <div className="height">
        <div className="flex center-flex py-5 p-5">
            <h4>Congrats, Order Placed Successfully!
            You will receive an email once it get shipped.
            </h4>
        </div>
        <div className="flex center-flex py-4">
        <Link to="/product-listing"><button className="btn btn-primary mr-4">Continue Shopping</button></Link>
        <Link to="/profile/orderDetails"><button className="btn btn-secondary">Order Details</button></Link>
        </div>
        </div>
    )
}