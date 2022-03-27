import { Filter } from "../../component/filter/filter"
import { Footer } from "../../component/footer/footer"
import "./productListing.css"
import { ProductBody } from "./productBody";
import { Navbar } from "../../component/navbar/navbar";
export const ProductListing = ()=>{
    return(
   <>
   <Navbar />
    <div class="grid product-page-layout" id="top-of-page">
        <div><Filter /></div>  
        <div><ProductBody /></div>       
    </div>
    <Footer />
   </>
    )
    }