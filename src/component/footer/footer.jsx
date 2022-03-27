import "./footer.css"
export const Footer = () => {
    return(
<footer className="footer-section-layout p-4">
<div className="text-center py-5">
    <p className="footer-heading py-2">IMPORTANT LINKS</p>
    <a href="#">
        <li className="gray-text pt-2">Refunds/Cancellation</li>
    </a>
    <a href="#">
        <li className="gray-text pt-2">Terms and Conditions</li>
    </a>
    <a href="#">
        <li className="gray-text pt-2">FAQs</li>
    </a>
    <a href="#">
        <li className="gray-text pt-2">Privacy Policy</li>
    </a>
</div>
<div className="text-center">
    <p className="footer-heading py-2">NEED HELP?</p>
    <a href="#">
        <li className="gray-text pt-2">My Account</li>
    </a>
    <a href="#">
        <li className="gray-text pt-2">Size Chart</li>
    </a>
    <a href="#">
        <li className="gray-text pt-2">Contact Us</li>
    </a>
</div>
<div className="text-center">
    <p className="footer-heading py-4">Follow Us</p>
    <a href="#"><i className="fab fa-instagram fa-2x mr-2 cursor-pointer"></i></a>
    <a href="#"><i className="fab fa-twitter fa-2x mr-2 cursor-pointer"></i></a>
    <a href="#"><i className="fa fa-globe fa-2x mr-2 cursor-pointer"></i></a>
</div>
<div className="text-center">
    <p className="footer-heading py-3">© 2022 RA-One Tech LLP</p>
    <small className="gray-text">All rights reserved.</small>
</div>
</footer>
    )
}