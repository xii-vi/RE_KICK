import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
return(
<div className="footer-container">
<footer className="footer-section-layout p-4">
<div className="text-center">
    <p className="footer-heading">IMPORTANT LINKS</p>
        <li className="gray-text pt-2">Refunds/Cancellation</li>
        <li className="gray-text pt-2">Terms and Conditions</li>
        <li className="gray-text pt-2">FAQs</li>
        <li className="gray-text pt-2">Privacy Policy</li>
</div>
<div className="text-center">
    <p className="footer-heading">NEED HELP?</p>
        <Link to="/profile"><li className="gray-text pt-2">My Account</li></Link>
        <li className="gray-text pt-2">Size Chart</li>
        <li className="gray-text pt-2">Contact Us</li>
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