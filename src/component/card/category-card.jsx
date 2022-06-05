import { Link } from "react-router-dom";
import axios from 'axios'
import "./card.css";
import { useCart } from "../../context/cartContext";
import{useEffect,useState} from "react";

export const CategoryCard = ()=>{
    const[category,setCategory] = useState([]);
    const {filterDispatch} = useCart();
    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/categories")
            setCategory(res.data.categories);
        })()
    }, [])
    const categoryHandler = (category) => {
        if(category==="apparel"){
            filterDispatch({type: "CATEGORY" , payload: "Streetwear"})
        }
        else{
            filterDispatch({ type: "GENDER", payload: category })
        }
    }
    return(
    <>
    {category.map(item=>
    <Link key={item._id} to="/product-listing" onClick={()=>categoryHandler(item.categoryName)}>
    <div className="card-wrapper" >
        <div className="category-card-img" >
            <img src = {item.image} alt="category" />
            </div>
            </div>
    </Link>
        )}
        </>
    )
}