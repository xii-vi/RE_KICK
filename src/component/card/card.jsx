import { Link } from "react-router-dom";

export const ProductCard = (product)=>{
const item = product.singleProduct
return(
<>
<Link to="/product-listing"> 
<div class="card-wrapper">
    <div class="card-img">
        <img src={item.image} alt={item.model} />
        <div class="p-3">
            <small>{item.brand}</small>
            <p class="bold-text">{item.model}</p>
            <small>₹ {item.price}</small>
        </div>
        {item.status !== "" && <div class="card-badge p-2">{item.status}</div>}
    </div>
</div>
</Link>
</>
)
}
