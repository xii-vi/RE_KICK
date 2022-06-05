import "./navbar.css"
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { useCart } from "../../context/cartContext";
import {useEffect,useState} from "react"
export const Navbar =()=>{
    const {authState:{userLogin,userData},authDispatch} = useAuth();
    const {filterDispatch,wishlistState:{wishlistItem},cartState:{cartItem},filterState:{search}} = useCart();
    const [searchQuery,setSearchQuery] = useState("")
    const loggedOut=()=>{
        localStorage.clear();
        authDispatch({ type: "USER_LOGOUT" })
        toast.info("Logged Out",{theme:"dark",position: toast.POSITION.BOTTOM_CENTER})
    }

    useEffect(()=>{
        let timer = setTimeout (()=>{
        filterDispatch({ type: "FILTER_BY_SEARCH", payload: searchQuery })
        },1000)
        return ()=> timer && clearTimeout(timer)
    },[searchQuery])

    const searchFunction =(search)=>{
        setSearchQuery(search)
    }
    return(
<div className="navbar-wrapper">
<nav className="flex navbar">
    <div className="logo">
        <Link to="/"> <span className="category-heading h2 site-name">RE-KICKS</span></Link>
    </div>
    <div className="search-bar-wrapper">
        <input type="text" placeholder="Search for Sneaker" onChange={(e) => searchFunction(e.target.value)} />
        <i className="fa fa-search cursor-pointer"></i>
    </div>
    <div className="nav-left-side-pills">   
        {userLogin?<button className="btn btn-secondary" onClick={loggedOut}>Logout</button>:<Link to="/login"><button className="btn btn-secondary">Login</button></Link>}
        <Link to="/wishlist">
            <span className="icons-wrapper">
                <span><i className="far fa-heart"></i></span>
                <span className="badge icons">{wishlistItem.length}</span>
            </span>
            </Link>
        <Link to="/cart"><span className="icons-wrapper">
                <span><i className="fa fa-shopping-bag"></i></span>
                <span className="badge icons">{cartItem.length}</span>
            </span></Link>
        <Link to="/profile"><span className="p-4">
        {userLogin?<span>{userData.firstName} <i className="far fa-user"></i></span>:<span><i className="far fa-user"></i></span>}
        </span>
        </Link>
    </div>
</nav>
</div>
    )
}