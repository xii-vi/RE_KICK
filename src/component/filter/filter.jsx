import { useCart } from "../../context/cartContext";
import "./filter.css"
export const Filter = ({setToggle})=>{
    const {filterDispatch , filterState :{ category, gender,priceRange,rating,brand}} = useCart();
    return(      
        <div className="p-5">
            <div className="filter-icon m-5" onClick={() => setToggle(pre => !pre)}>
                    Filter <i className="fa fa-filter fa-2x"></i>
                </div>
            <div className="sm-filter-container">
                    <p className="close-icon" onClick={() => setToggle(pre => !pre)}><i className="fa fa-times fa-2x"></i></p>
                    <div className=" text-center mt-4">
                            <button className="py-2 btn btn-primary" onClick={() => filterDispatch({ type: "RESET" })}>Reset Filters</button>
                        </div>
                        <p className="py-4">FILTER & SEARCH</p>
                        <p className="py-1">Filter by Category</p>
                        <div className="flex flex-direction-col">
                            <label className="py-1"><input type="checkbox" value="Sneakers"
                            checked={category.includes("Sneakers")}
                            onChange={(e) => filterDispatch({ type: "CATEGORY", payload: e.target.value })}/>
                                Sneakers
                            </label>
                            <label className="py-1"><input type="checkbox" value="Streetwear" 
                            checked={category.includes("Streetwear")}
                            onChange={(e) => filterDispatch({ type: "CATEGORY", payload: e.target.value })}/>
                                Streetwear
                            </label>
                        </div>
                        <div className="flex flex-direction-col">
                            <p className="py-1">Filter by Gender</p>
                            <label className="py-1"htmlFor="Unisex">
                                <input type="radio" value="Unisex" name="radio-button" 
                                checked={gender === "UNISEX"} onChange={() => filterDispatch({ type: "GENDER", payload: "UNISEX" })}/> Unisex
                            </label>
                            <label className="py-1"htmlFor="Men">
                                <input type="radio" value="Men" name="radio-button" 
                                checked={gender === "MEN"}
                                onChange={() => filterDispatch({ type: "GENDER", payload: "MEN" })}/> Men
                            </label>
                            <label className="py-1"htmlFor="Women">
                                <input type="radio" value="Women" name="radio-button"
                                checked={gender === "WOMEN"} onChange={() => filterDispatch({ type: "GENDER", payload: "WOMEN" })}/> Women
                            </label>
                        </div>
                        <p className="py-4">Filter by Price</p>
                        <div className="flex flex-direction-col">
                        <input className="simple-slider" type="range" min="99" max="6000"
                                value={priceRange} onChange={(e)=> filterDispatch({type:"PRICE_RANGE" , payload: e.target.value})} />
                        </div>
                        <div className="mt-5">
                            <span className="btn btn-primary">${priceRange}</span>
                        </div>
                        <p className="py-4">Filter by Brand</p>
                        <div className="flex flex-direction-col">
                            <label className="py-1"><input type="checkbox" value="ADIDAS" 
                            checked={brand.includes("ADIDAS")}
                            onChange={(e) => filterDispatch({ type: "BRAND", payload: e.target.value })}/>
                                Adidas
                            </label>
                            <label className="py-1"><input type="checkbox" value="DREW"
                            checked={brand.includes("DREW")}
                            onChange={(e) => filterDispatch({ type: "BRAND", payload: e.target.value })}/>
                                Drew
                            </label>
                            <label className="py-1"><input type="checkbox" value="ESSENTIAL"
                            checked={brand.includes("ESSENTIAL")} 
                            onChange={(e) => filterDispatch({ type: "BRAND", payload: e.target.value })}/>
                                Essential
                            </label>
                            <label className="py-1"><input type="checkbox" value="McDonald's"
                            checked={brand.includes("McDonald's")}
                            onChange={(e) => filterDispatch({ type: "BRAND", payload: e.target.value })}/>
                                McDonald's
                            </label>
                            <label className="py-1"><input type="checkbox" value="NIKE"
                            checked={brand.includes("NIKE")}
                            onChange={(e) => filterDispatch({ type: "BRAND", payload: e.target.value })}/>
                                Nike
                            </label>
                        </div>
                    </div>
                </div>
    )
}