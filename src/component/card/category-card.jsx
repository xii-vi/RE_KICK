import { Link } from "react-router-dom";
import "./card.css";
export const CategoryCard = ()=>{
    const categoryImg= [
        "https://superkicks.in/wp-content/uploads/2021/10/Men.jpg",
        "https://superkicks.in/wp-content/uploads/2021/10/Womenn.jpg",
        "https://superkicks.in/wp-content/uploads/2021/10/Apparel.jpg"
    ]
    return(
    <>
    {categoryImg.map(item=>
    <Link to="/product-listing">
    <div className="card-wrapper">
        <div className="category-card-img">
            <img src = {item}/>
            </div>
            </div>
    </Link>
        )}
    
        </>
    )
}