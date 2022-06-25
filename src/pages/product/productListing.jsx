import { Filter } from "../../component/filter/filter"
import "./productListing.css"
import { ProductBody } from "./productBody";
import {useState} from "react";
import { useDocumentTitle } from "../../utilities/documentTitle";
export const ProductListing = ()=>{
    useDocumentTitle("Products")
    const[toggle,setToggle] = useState(false);
    return(
<>
    <div className="grid product-page-layout">
        <div className={toggle?"sm-filter":""}>
            <Filter setToggle={setToggle} />
            </div>  
        <div><ProductBody /></div>       
    </div>
</>
    )
    }