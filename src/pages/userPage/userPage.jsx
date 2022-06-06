import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import "./userPage.css"
import { useAuth } from '../../context/authContext'
export const UserPage = () => {
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
                    <button className='btn btn-primary user-page-link my-2' onClick={(e)=>buttonText(e)}>
                        <NavLink
                            to="/profile"
                            // className={({ isActive }) => `${styles.sidebar__link_item} ${isActive ? styles.active__link : ""
                            //     }`}
                        >
                            Profile
                        </NavLink>
                    </button>
                    <button className='btn btn-primary user-page-link mb-2'onClick={(e)=>buttonText(e)}>
                        <NavLink
                            to="/profile/address"
                            // className={({ isActive }) => `${styles.sidebar__link_item} ${isActive ? styles.active__link : ""
                            //     }`}
                        >
                            Address
                        </NavLink>
                    </button>
                    <button className='btn btn-primary user-page-link' onClick={(e)=>buttonText(e)}>
                        <NavLink
                            to="/profile/orderDetails"
                            // className={({ isActive }) => `${styles.sidebar__link_item} ${isActive ? styles.active__link : ""
                            //     }`}
                        >
                            Orders
                        </NavLink>
                    </button>
                </div>
                <div className='outlet-wrapper p-4'>
                    <h6>MyAccount {'>'} {clickedButton}</h6>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}