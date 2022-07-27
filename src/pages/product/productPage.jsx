import { SingleProductCard } from "../../component/card/singleproductCard"
import { useParams } from "react-router-dom";
export const ProductPage = ()=>{
    const {productId} = useParams();
    return(
        <>
        <SingleProductCard productId={productId} />
        </>
    )
}