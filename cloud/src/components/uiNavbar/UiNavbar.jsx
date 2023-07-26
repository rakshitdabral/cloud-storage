import React, { useState,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../ui/ui.css";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCircleQuestion,faCircleUser,faGear, faListUl ,faSliders} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../context/AuthContext";


export default function UiNavbar(){
    const {authDispatcher, userAuth} = useContext(AuthContext)
    const [user, setUser] = useState('')
    const navigate = useNavigate();

    const logOut = async()=>{
        // localStorage.removeItem('user');
        await authDispatcher('LOGOUT')
        navigate("/",{replace:true}); 
      }
    return(
        <>
            <div className="header">
        <div className="headerLogo">
            <strong>CLOUD'O</strong>
            <span></span>
        </div>
        <div className="searchBar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input  type="text" placeholder="search for your item"></input>
            <FontAwesomeIcon icon={faSliders} />
        </div>
        <div className="options">
        <FontAwesomeIcon className="optionIcons" icon={faCircleQuestion} />
        <span></span>
        <FontAwesomeIcon className="optionIcons" icon={faGear} />
        <span></span>
        <FontAwesomeIcon className="optionIcons" icon={faListUl} />
        <span></span>
        <button className="account" onClick={logOut}><FontAwesomeIcon className="optionIcons user" icon={faCircleUser} /></button>
        </div>
      </div>
        </>
    )
}