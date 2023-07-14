import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ui.css";
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCircleQuestion,faCircleUser,faGear, faListUl ,faSliders} from '@fortawesome/free-solid-svg-icons'

function Ui() {
    const navigate = useNavigate();
    const logOut = async()=>{
        localStorage.removeItem('user');
        navigate("/",{replace:true});
    }


  return (
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
      <button>Add</button>
    </>
  )
}

export default Ui;
