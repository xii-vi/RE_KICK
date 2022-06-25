import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
return(
<div className="footer-container">
<footer className="footer-section-layout p-4">
<div className="text-center">
    <p className="footer-heading">IMPORTANT LINKS</p>
    <Link to="/cart"><li className="gray-text pt-2">My Cart</li></Link>
    <Link to="/"><li className="gray-text pt-2">Homepage</li></Link>    
    <Link to="/product-listing"><li className="gray-text pt-2">Product Listing</li></Link>
    <Link to="/wishlist"><li className="gray-text pt-2">Wishlist Section</li></Link>
</div>
<div className="text-center">
    <p className="footer-heading">NEED HELP?</p>
        <Link to="/login"><li className="gray-text pt-2">Login</li></Link>
        <Link to="/signup"><li className="gray-text pt-2">Register</li></Link>
        <Link to="/profile"><li className="gray-text pt-2">My Account</li></Link>
</div>
<div className="text-center">
    <p className="footer-heading">Follow Us</p>
    <i className="fab fa-instagram fa-2x mr-2 cursor-pointer"></i>
    <i className="fab fa-twitter fa-2x mr-2 cursor-pointer"></i>
    <i className="fa fa-globe fa-2x mr-2 cursor-pointer"></i>
</div>
<div className="text-center">
    <p className="footer-heading">Contact Us</p>
    <small className="gray-text">info@rekick.com</small>
</div>
</footer>
<hr />
<div className="text-center">
    <p className="h1 site-name">RE-KICKS</p>
</div>
<hr />
<div className="text-center">
    <p className="footer-heading">© 2022 RA-One Tech LLP</p>
    <small className="gray-text">All rights reserved.</small>
</div>
</div>
    )
}