import { SingleProductCard } from "../../component/card/singleproductCard"
import { useParams } from "react-router-dom";
export const ProductPage = ()=>{
    const {productId} = useParams();
    console.log(productId)
    return(
        <>
        <SingleProductCard productId={productId} />
        </>
    )
}