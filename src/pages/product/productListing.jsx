import { Filter } from "../../component/filter/filter"
import "./productListing.css"
import { ProductBody } from "./productBody";
export const ProductListing = ()=>{
    return(
<>
    <div className="grid product-page-layout">
        <div><Filter /></div>  
        <div><ProductBody /></div>       
    </div>
</>
    )
    }