import { ProductCard } from "../../component/card/card";
import { CategoryCard } from "../../component/card/category-card";
import { useCart } from "../../context/cartContext";

export const ProductBody = () =>{
    const { resp } = useCart();
    const TrendingStreetwear = resp.filter(item=>item.category==="Streetwear").slice(0,3)
    const TrendingSneaker = resp.filter(item=>item.category==="Sneakers").slice(3,6)
    const NewArrival = resp.filter(item=>item.category==="Sneakers").slice(0,3)
    return(
    <div>
    <p className="category-heading h4 m-5 py-5">NEW ARRIVALS</p>
        <div className="grid product-section-layout m-4">{NewArrival.map(item=><ProductCard singleProduct={item}/>)}</div>
        <p className="category-heading h4 m-5 py-5">TRENDING SNEAKERS</p>
        <div className="grid product-section-layout m-4">{TrendingSneaker.map(item=><ProductCard singleProduct={item}/>)}</div>
        <p className="category-heading h4 m-5 py-5">TRENDING STREETWEAR</p>
        <div className="grid product-section-layout m-4">{TrendingStreetwear.map(item=><ProductCard singleProduct={item}/>)}</div>
        <p className="category-heading h4 m-5 py-5">CATEGORIES</p>
        <div className="grid product-section-layout m-4"><CategoryCard /></div>
    </div>
    )
}