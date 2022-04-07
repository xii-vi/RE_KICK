import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
export const Navbar =()=>{
    const navigate= useNavigate();
    const {authState:{userLogin,userData}} = useAuth();

    const loggedOut=()=>{
        toast.info("Logged Out",{theme:"dark",position: toast.POSITION.BOTTOM_CENTER})
        localStorage.clear() 
        navigate(0)
    }
    return(
<div className="navbar-wrapper">
<nav className="flex navbar">
    <div className="logo">
        <Link to="/"> <span className="category-heading h2 site-name">RE-KICKS</span></Link>
    </div>
    <div className="search-bar-wrapper">
        <input type="text" placeholder="Search for Sneaker" />
        <i className="fa fa-search cursor-pointer"></i>
    </div>
    <div className="nav-left-side-pills">   
        {userLogin?<button className="btn btn-primary" onClick={loggedOut}>Logout</button>:<Link to="/login"><button className="btn btn-primary">Login</button></Link>}
        {userLogin?<Link to="/wishlist"><i className="far fa-heart"></i></Link>:<Link to="/login"><i className="far fa-heart"></i></Link>}
        {userLogin?<Link to="/cart"><i className="fa fa-shopping-bag"></i></Link>:<Link to="/login"><i className="fa fa-shopping-bag"></i></Link>}
        {userLogin?<span>{userData.firstName} <i className="far fa-user ml-2"></i></span>:<i className="far fa-user"></i>}
    </div>
</nav>
</div>
    )
}