import { ProductCard } from "../../component/card/card"
import { useCart } from "../../context/cartContext";
import { filterFunction } from "../../component/filter/filterFunction";
export const ProductBody = ()=>{
    const { resp,state,dispatch } = useCart();
    const { category, sortBy , gender, priceRange, rating , brand } = state;
    let sortedArr = [...resp];
    sortedArr = filterFunction(resp, category, sortBy, gender , priceRange, rating ,brand);
    console.log("final.......",sortedArr)
    return(
        <div>
        <p className="heading-sm-screen">
                    <a href="/index.html">Home</a><span className="active-page-text">
                        <a href="/pages/product-page/sneaker.html"> / Sneaker</a></span>
                </p>
                <div className="filter-icon">
                    <a id="filter-icon">Filter <i className="fa fa-filter fa-2x"></i></a>
                </div>
                <select onChange={(e) => dispatch({ type: "SORT", payload: e.target.value })}>
                    <option value="">Sort by</option>
                    <option value="LOWTOHIGH">Low to High</option>
                    <option value="HIGHTOLOW">High to Low</option>
                </select>
            <div className="grid product-section-layout my-5">
            {sortedArr.map(item=><ProductCard singleProduct={item}/>)}                        
            </div>
        </div>
    )
}