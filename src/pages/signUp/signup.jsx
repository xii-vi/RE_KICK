import axios from "axios";
import React,{useReducer} from "react";
import "../signUp/signup.css"
import {Link, useNavigate} from "react-router-dom";
import { Navbar } from "../../component/navbar/navbar";
import { Footer } from "../../component/footer/footer"
import { signupReducer } from "../../reducer/authReducer";
import { useAuth } from "../../context/authContext";

export const Signup = () => {
    const navigate = useNavigate();
    const {authDispatch}= useAuth();
    const [{username,email,password,ConfirmPassword},signupDispatch] = useReducer(signupReducer, {username:"",email:"", password:"",ConfirmPassword:""});
    const submitHandler= async (e, username, email, password, ConfirmPassword)=>{
     e.preventDefault();
     try{
     const signUpResponse = await axios.post("api/auth/signup", {username,email,password,ConfirmPassword});
     localStorage.setItem("token", signUpResponse.data.encodedToken)
     localStorage.setItem('userData', JSON.stringify(signUpResponse.data.createdUser));
     authDispatch({ type: "ADD_TOKEN", payload: responseData.data.encodedToken })
    }
    catch(err){
    console.log(err);
    }
    finally{
    navigate("/login")
    }
}
return(
    <div className="signup">
        <Navbar />
        <div className="container-authentication" >
    <form className="p-5 center-flex signup-form" onSubmit={(e)=> submitHandler(e, username, email, password)}>
        <h5>Welcome to the CRIB, fam!!</h5>
        <div className="my-5">
            {/* <div className="py-5 flex flex-direction-col">
                <small className="py-2">Username</small>
                <input className="p-2" type="text" placeholder="hypebeast" value={username} required 
                onChange={(e)=> signupDispatch({type:"SET_USERNAME",payload:e.target.value})}/>
            </div> */}
            <div className="pb-5 flex flex-direction-col">
                <small className="py-2">E-mail</small>
                <input className="p-2" type="email" placeholder="heat@got-you.com" value={email} required  onChange={(e)=> signupDispatch({type:"SET_EMAIL",payload:e.target.value})}/>
            </div>
            <div className="pb-5 flex flex-direction-col">
                <small className="pb-2">Password</small>
                <input className="p-2" type="password" placeholder="password" value={password} required 
                onChange={(e)=> signupDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
            </div>
            <div className="pb-5 flex flex-direction-col">
                <small className="pb-2">Confirm Password</small>
                <input className="p-2" type="password" placeholder="Confirm password" value={ConfirmPassword} required 
                onChange={(e)=> signupDispatch({type:"SET_CONFIRM_PASSWORD",payload:e.target.value})}/>
            </div>
            <div>{ConfirmPassword === password ? "" : <div class="alert alert-danger"><i class="fas fa-exclamation-triangle mr-2"></i>Password doesn't match</div>}
            </div>
            <div className="py-5">
                <button className="btn btn-primary text-bold login-btn">Register</button>
            </div>
            <Link to="/login"><p className="py-2">Already a member ? <span className="text-bold">Login</span></p></Link>
        </div>
    </form>
    </div>
    <Footer />
    </div>
    )
}