import "./navbar.css"
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
export const Navbar =()=>{
    const {authState:{userLogin,userData}} = useAuth();
    return(
<div className="navbar-wrapper">
<nav className="flex navbar">
    <div className="logo">
        <Link to="/"> <span className="category-heading h2">RE-KICKS</span></Link>
    </div>
    <div className="search-bar-wrapper">
        <input type="text" placeholder="Search for Sneaker" />
        <i className="fa fa-search cursor-pointer"></i>
    </div>
    <div className="nav-left-side-pills">
        <Link to="/login">
        {userLogin?<span className="btn btn-primary" id="login-btn">Logout</span>:<span className="btn btn-primary" id="login-btn">Login</span>}
        </Link>
        {userLogin?<Link to="/wishlist"><i className="far fa-heart"></i></Link>:<Link to="/login"><i className="far fa-heart"></i></Link>}
        {userLogin?<Link to="/cart"><i className="fa fa-shopping-bag"></i></Link>:<Link to="/login"><i className="fa fa-shopping-bag"></i></Link>}
        {userLogin?<span>{userData.firstName} <i className="far fa-user"></i></span>:<i className="far fa-user"></i>}
    </div>
</nav>
</div>
    )
}