import React, { useState, useLayoutEffect,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ui.css";
import AddFolder from "../functionality/Addfolder";
import ShowFolder from "../functionality/ShowFolder";
import { AuthContext } from "../../context/AuthContext";
import UiNavbar from "../uiNavbar/UiNavbar";
import UploadFile from "../functionality/UploadFile";
import ShowFile from "../functionality/ShowFile";

function Ui() {
    sessionStorage.setItem("folderId","null")
    const {authDispatcher, userAuth} = useContext(AuthContext)
    const [user, setUser] = useState('')

    

    useLayoutEffect(()=>{
      document.body.style.overflow = "hidden";
      setUser(localStorage.getItem('user'))
    },[])

    
   
    
    
    
    
    
    

  


  return (
    <>
      <div>
        <UiNavbar/>
      </div>
      <div className="ui-body-container">
        <div className="ui-body-side-bar">
        <div>
      <AddFolder/>
      </div>
      <div>
        <UploadFile />
      </div>
        </div>
        <div className="ui-body-main-wrapper" id="display">
        <ShowFolder/>
        <ShowFile/>
        </div>
      </div>
    </>
  )
}

export default Ui;
