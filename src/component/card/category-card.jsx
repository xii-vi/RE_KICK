import { Link } from "react-router-dom";
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
    <div class="card-wrapper">
        <div class="card-img">
            <img src = {item}/>
            </div>
            </div>
    </Link>
        )}
    
        </>
    )
}