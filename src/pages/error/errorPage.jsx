import { Link } from 'react-router-dom';
import error from "./error.svg"
export const Error = () => {
    return (
        <>
            <div className='text-center'>
                <img className = "error-img" src={error} alt="error" />
                <h3>Page not found</h3>
                <div className='pb-5'>
                <Link to="/product-listing" className='btn btn-primary'>Explore</Link>
                </div>
            </div>
        </>
    )
}
