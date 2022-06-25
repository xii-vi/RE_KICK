import { ProductCard } from "../../component/card/card"
import { useCart } from "../../context/cartContext";
import { filterFunction } from "../../component/filter/filterFunction";
export const ProductBody = ()=>{
    const { responseData,filterState,filterDispatch } = useCart();
    const { category, sortBy , gender, priceRange, rating , brand,search } = filterState;
    let sortedArr = [...responseData];
    sortedArr = filterFunction(responseData, category, sortBy, gender , priceRange, rating ,brand,search);
    return(
        <div className="py-5 px-2">
        <div className="search-bar-wrapper-mobile mx-5">
        <input type="text" placeholder="Search for Sneaker" onChange={(e) => filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })} />
        <button><i className="fa fa-search cursor-pointer"></i></button>
            </div>
            <div className="m-5">
                <select className="p-2" onChange={(e) => filterDispatch({ type: "SORT", payload: e.target.value })}>
                    <option value="">Sort by</option>
                    <option value="LOWTOHIGH">Low to High</option>
                    <option value="HIGHTOLOW">High to Low</option>
                </select>
            </div>
            <div className="h3 m-5">Total Product: {sortedArr.length}</div>
            {sortedArr.length===0?
            <div className="flex center-flex flex-direction-col">
                <h5>No Product Found</h5>
                <button className="py-2 btn btn-primary" onClick={() => filterDispatch({ type: "RESET" })}>Reset Filters</button>
            </div>:
            <div className="grid product-section-layout my-5">
            {sortedArr.map(item=><ProductCard singleProduct={item} key={item._id}/>)}                        
            </div>}
        </div>
    )
}