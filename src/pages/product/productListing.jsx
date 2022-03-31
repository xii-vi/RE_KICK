import { Filter } from "../../component/filter/filter"
import "./productListing.css"
import { ProductBody } from "./productBody";
export const ProductListing = ()=>{
    return(
   <>
    <div class="grid product-page-layout" id="top-of-page">
        <div><Filter /></div>  
        <div><ProductBody /></div>       
    </div>
   </>
    )
    }