import React, { useState } from "react";
import "./getstarted.css";
import { FcGoogle } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Ui from "../ui/Ui"
import Bgimage from "./images/bg.jpg";
import { signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import { auth , googleProvider } from "../../essential/firebase-config";
import {useNavigate} from "react-router-dom";


function GetStarted() {
  const user = auth.currentUser
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const navigate = useNavigate();

  const login = async()=>{
        await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        
  }

  const signInWithGoogle = async()=>{
    try{
      await signInWithPopup(auth, googleProvider);
    }catch(err){
      console.error(err);
    }
    
    if(user!=null){
      localStorage.setItem('user', user);
      navigate("/cloudo/my-cloud", {replace: true})
    }
  }

  
  return (
    <>
      <div className="container-fluid row form-ui g-0">
        <div className="col g-0 leftside">
          <div className="container form-ui-box">
            <h1><strong>Login</strong></h1>
            <p className="subtitle-one">Unlock your world with just a click - log in now!</p>
            <button onClick={signInWithGoogle} type="button" className="btn btn-light button-signin">
              <FcGoogle/>  <strong className="sign-in-text">Sign in with Google</strong>
            </button>
            <h6>
              <span>or Sign in with Email</span>
            </h6>

            <form className="form">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <strong>Email*</strong>
                </label>
                <input
                  type="email"
                  className="form-control form-ct"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="mail@website.com"
                  onChange={(event)=>{
                    setLoginEmail(event.target.value)
                  }}
                ></input>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  <strong>Password*</strong>
                </label>
                <input
                  type="password"
                  class="form-control form-ct"
                  id="exampleInputPassword1"
                  placeholder="Min. 8 character"
                  onChange={(event)=>{
                    setLoginPassword(event.target.value)
                  }}
                ></input>
                
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label" for="exampleCheck1">
                 <strong>Remember me</strong>
                </label>
                <a href="/" className="forgot"><strong>Forgot password?</strong></a>
              </div>
              <button type="submit" class="btn btn-primary btn-login"  onClick={login}>
                Login
              </button>
              <div class="mb=3">
                <p>Not registered yet?<a href="/" className="create"><strong>Create an Account</strong></a></p>
              </div>
            </form>
          </div>
        </div>
        <div className="col g-0 rightside">
        <div className="container image-bg">
             <img className="image-right" src={Bgimage }alt="sharing" />  
            </div>
        </div>  
      </div>
    </>
  );
}

export default GetStarted;
