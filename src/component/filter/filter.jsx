import { useCart } from "../../context/cartContext";
import { useState,useEffect } from "react";
export const Filter = ()=>{
    const[filter,setFilter]= useState(true);
    const {dispatch , state :{ category, gender,priceRange,rating,brand}} = useCart()

    const closeFilter =()=>{
        filter?setFilter(false):setFilter(true)
    }

    const windowResizeHandler =(e,width)=>{
        if(e?.currentTarget?.innerWidth <1080 || width <1080 )
        setFilter(false)
        else 
        setFilter(true)
    }

    useEffect(()=>{
        windowResizeHandler(null,window.screen.width)
        window.addEventListener("resize",windowResizeHandler)
        return ()=>{
        window.removeEventListener("resize",windowResizeHandler)
        }
    },[])
    
    return(      
        <div>
            <div className="filter-icon m-5" onClick={closeFilter}>
                    Filter <i className="fa fa-filter fa-2x"></i>
                </div>
            <div className="product-page-heading p-2">
                <div className={filter?"sm-filter":"hidden"}>
                    <div className="sm-filter-container">
                    <p className="close-icon" onClick={closeFilter}><i className="fa fa-times fa-2x"></i></p>
                    <div className=" text-center mt-4">
                            <button className="py-2 btn btn-primary" onClick={() => dispatch({ type: "RESET" })}>Reset Filters</button>
                        </div>
                        <p className="py-4">FILTER & SEARCH</p>
                        <p className="py-1">Filter by Category</p>
                        <div className="flex flex-direction-col">
                            <label className="py-1"><input type="checkbox" value="Sneakers"
                            checked={category.includes("Sneakers")}
                            onClick={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}/>
                                Sneakers
                            </label>
                            <label className="py-1"><input type="checkbox" value="Streetwear" 
                            checked={category.includes("Streetwear")}
                            onClick={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}/>
                                Streetwear
                            </label>
                        </div>
                        <div className="flex flex-direction-col">
                            <p className="py-1">Filter by Gender</p>
                            <label className="py-1"htmlFor="Unisex">
                                <input type="radio" value="Unisex" name="radio-button" 
                                checked={gender === "UNISEX"} onChange={() => dispatch({ type: "GENDER", payload: "UNISEX" })}/> Unisex
                            </label>
                            <label className="py-1"htmlFor="Men">
                                <input type="radio" value="Men" name="radio-button" 
                                checked={gender === "MEN"}
                                onChange={() => dispatch({ type: "GENDER", payload: "MEN" })}/> Men
                            </label>
                            <label className="py-1"htmlFor="Women">
                                <input type="radio" value="Women" name="radio-button"
                                checked={gender === "WOMEN"} onChange={() => dispatch({ type: "GENDER", payload: "WOMEN" })}/> Women
                            </label>
                        </div>
                        <p className="py-4">Filter by Price</p>
                        <div className="flex flex-direction-col">
                        <input className="simple-slider" type="range" min="99" max="6000"
                                value={priceRange} onChange={(e)=> dispatch({type:"PRICE_RANGE" , payload: e.target.value})} />
                        </div>
                        <div className="mt-5">
                            <span className="btn btn-primary">${priceRange}</span>
                        </div>


                        <p className="py-4">Filter by Rating</p>
                        <div className="flex flex-direction-col">
                            <label className="py-1"><input type="radio" checked={rating==="4"}
                            name="radio-rating" onChange={() => dispatch({ type: "RATING", payload: "4" })}/>
                                4★ & above
                            </label>
                            <label className="py-1"><input type="radio" checked={rating==="3"}
                            name="radio-rating" onChange={() => dispatch({ type: "RATING", payload: "3" })}/>
                                3★ & above
                            </label>
                            <label className="py-1"><input type="radio" checked={rating==="2"} name="radio-rating" onChange={() => dispatch({ type: "RATING", payload: "2" })}/>
                                2★ & above
                            </label>
                            <label className="py-1"><input type="radio" checked={rating==="1"}name="radio-rating" onChange={() => dispatch({ type: "RATING", payload: "1" })}/>
                                1★ & above
                            </label>
                        </div>


                        <p className="py-4">Filter by Brand</p>
                        <div className="flex flex-direction-col">
                            <label className="py-1"><input type="checkbox" value="ADIDAS" 
                            checked={brand.includes("ADIDAS")}
                            onClick={(e) => dispatch({ type: "BRAND", payload: e.target.value })}/>
                                Adidas
                            </label>
                            <label className="py-1"><input type="checkbox" value="DREW"
                            checked={brand.includes("DREW")}
                            onClick={(e) => dispatch({ type: "BRAND", payload: e.target.value })}/>
                                Drew
                            </label>
                            <label className="py-1"><input type="checkbox" value="ESSENTIAL"
                            checked={brand.includes("ESSENTIAL")} 
                            onClick={(e) => dispatch({ type: "BRAND", payload: e.target.value })}/>
                                Essential
                            </label>
                            <label className="py-1"><input type="checkbox" value="McDonald's"
                            checked={brand.includes("McDonald's")}
                            onClick={(e) => dispatch({ type: "BRAND", payload: e.target.value })}/>
                                McDonald's
                            </label>
                            <label className="py-1"><input type="checkbox" value="NIKE"
                            checked={brand.includes("NIKE")}
                            onClick={(e) => dispatch({ type: "BRAND", payload: e.target.value })}/>
                                Nike
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}