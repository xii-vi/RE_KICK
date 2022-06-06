import axios from "axios";
import "../login/login.css"
import { React, useReducer } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { loginReducer } from "../../reducer/authReducer";
import { toast } from 'react-toastify';
import { useCart } from "../../context/cartContext";
import { LoadSpin } from "../../component/loader/loader";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {authDispatch}= useAuth();
  const {isLoading,setIsLoading} = useCart();
  const from = location.state?.from?.pathname || "/"; 
  const [{email,password},loginDispatch] = useReducer(loginReducer, {email:"", password:""});
  
  const testHandler=()=>[
    loginDispatch({type:"SET_EMAIL",payload:"rohitabhishek318@gmail.com"}),
    loginDispatch({type:"SET_PASSWORD",payload:"rohitabhishek"})
  ]

  const submitHandler= async (e, email, password)=>{
  e.preventDefault();
  try{
  setIsLoading(true)
  const loginResponse = await axios.post("api/auth/login", {email,password});
  localStorage.setItem("encodedToken", loginResponse.data.encodedToken)
  localStorage.setItem('userData', JSON.stringify(loginResponse.data.foundUser));
  authDispatch({ type: "USER_LOGIN" })
  toast.info("Logged In",{theme:"dark",position: toast.POSITION.BOTTOM_CENTER})
  authDispatch({ type: "USER_TOKEN", payload: loginResponse.data.encodedToken })
  authDispatch({ type: "USER_DATA", payload: loginResponse.data.foundUser })
  navigate(from, {replace : true} )
  setIsLoading(false)
}catch(err){
    toast.error("Some Error Occured",{theme:"dark",position: toast.POSITION.BOTTOM_CENTER})
}
}
    return(
    <div className="login">
    <div className="container-authentication-login py-5">
        <form className="p-5 center-flex login-form" onSubmit={(e)=> submitHandler(e, email,password)}>
            <p className="h5">Let's get you some KICKS!!!</p>
            <div className="my-5">
                <div className="py-5 flex flex-direction-col">
                    <small className="py-2">E-mail</small>
                    <input className="p-2" type="email" placeholder="heat@gotyou.com" value={email} required onChange={(e)=> loginDispatch({type:"SET_EMAIL",payload:e.target.value})}/>
                </div>
                <div className="pb-5 flex flex-direction-col">
                    <small className="pb-2">Password</small>
                    <input className="p-2" type="password" placeholder="password" value={password} required onChange={(e)=> loginDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
                </div>
                <div className="py-2">
                    <p>Forgot Password ?</p>
                </div>
                { isLoading ?<LoadSpin />:
                <div className="py-3">
                    <button className="btn btn-outline-primary login-btn">Login</button>
                    <button className="btn btn-outline-primary login-btn" onClick={testHandler}>Guest Login</button>
                </div>
                }
                <Link to="/signup">
                <p className="pb-4">New here ? <span className="text-bold">Register Now</span></p>
                </Link>
            </div>
        </form>
    </div>
    </div>  
    )
}