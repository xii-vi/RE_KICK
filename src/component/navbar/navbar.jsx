import "./navbar.css"

export const Navbar =()=>{
    return(
<div className="navbar-wrapper">
<nav className="flex navbar">
    <a id="open-menu" className="open-menu"><i className="fa fa-bars fa-2x"></i></a>
    <a id="close-menu" className="close-menu"><i className="fa fa-times fa-2x"></i></a>
    <div className="mobile-sidebar" id="sm-sidebar">
    </div>
    <div className="logo">
        <span className="category-heading h2"><a href="/index.html">RE-KICKS</a></span>
    </div>
    <div className="search-bar-wrapper">
        <input type="text" placeholder="Search for Sneaker" />
        <i className="fa fa-search cursor-pointer"></i>
    </div>
    <div className="nav-left-side-pills">
        <a href="/pages/login.html" className="btn btn-primary" id="login-btn">Login</a>
        <a href="/pages/wishlist.html"><i className="far fa-heart"></i></a>
        <a href="/pages/cart.html"><i className="fa fa-shopping-bag"></i></a>
        <a href="/pages/login.html"><i className="far fa-user"></i></a>
    </div>
</nav>
</div>
    )
}