import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import "./userPage.css"
import { useAuth } from '../../context/authContext'
import { useDocumentTitle } from '../../utilities/documentTitle'
export const UserPage = () => {
    useDocumentTitle("Account")
    const { authState:{userData:{firstName,lastName}}} = useAuth();
    const [clickedButton,setClickedbutton] = useState("Profile");
    const buttonText =(e)=>{
        setClickedbutton(e.target.innerText);
    }
    return (
        <div>
            <div className='grid user-page-layout height'>
                <div className='pl-5 py-5 flex center-flex flex-direction-col'>
                <div className="avatar-wrapper">
                <img className="avatar avatar-std" src="https://re-ui.netlify.app/assets/avatar/avatar-2.png" alt="user-profile"/>
                <span> {firstName} {lastName} </span></div>
                        <NavLink
                            to="/profile"
                            onClick={(e)=>buttonText(e)}
                            className="btn btn-primary user-page-link my-2"
                        >
                            Profile
                        </NavLink>

                        <NavLink
                        className="btn btn-primary user-page-link my-2"
                        onClick={(e)=>buttonText(e)}
                            to="/profile/address"
                        >
                            Address
                        </NavLink>
                    
                        <NavLink
                        className="btn btn-primary user-page-link my-2"
                        onClick={(e)=>buttonText(e)}
                            to="/profile/orderDetails"
                        >
                            Orders
                        </NavLink>
                    
                </div>
                <div className='outlet-wrapper p-4'>
                    <h6>MyAccount {'>'} {clickedButton}</h6>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}