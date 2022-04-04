import { ProductCard } from "../../component/card/card"
import { useCart } from "../../context/cartContext";
import { filterFunction } from "../../component/filter/filterFunction";
export const ProductBody = ()=>{
    const { responseData,state,dispatch } = useCart();
    const { category, sortBy , gender, priceRange, rating , brand } = state;
    let sortedArr = [...responseData];
    sortedArr = filterFunction(responseData, category, sortBy, gender , priceRange, rating ,brand);
    return(
        <div className="py-5">
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