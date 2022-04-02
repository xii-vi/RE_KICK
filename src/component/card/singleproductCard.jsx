export const SingleProductCard = (product)=>{
  const singleProductItem = product.singleProduct
    return(
       <>
       <div className="grid-40-60-layout">
    <div className="card-img flex">
    <img src={singleProductItem.image} alt={singleProductItem.model} />
     </div>
 <div className="horizontal-card-text-content flex flex-direction-col p-2">
 <small>{singleProductItem.brand}</small>
       <h4 className="m-0">{singleProductItem.model}</h4>
       <small>₹ {singleProductItem.price}</small>
       <p className="text-card-content">......</p>
      <div className="flex flex-direction-col">
          <select className="shoe-size-select">
           <option value="Select your size">Select your size</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
          </select>
      </div>
     <button className="btn btn-outline-secondary mt-2"><i className="fa fa-heart mr-2"></i>
       Add to Wishlist</button>
     <button className="btn btn-primary mt-2"><i className="fa fa-shopping-cart mr-2"></i>
       Add to Cart</button>
      </div>
 </div>
       </> 
    )
}