import React, { useState, useLayoutEffect,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ui.css";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCircleQuestion,faCircleUser,faGear, faListUl ,faSliders,faPlus} from '@fortawesome/free-solid-svg-icons'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../essential/firebase-config";
import { AuthContext } from "../../context/AuthContext";

function Ui() {
    const {authDispatcher, userAuth} = useContext(AuthContext)
    const [user, setUser] = useState('')
    const navigate = useNavigate();

    useLayoutEffect(()=>{
      setUser(localStorage.getItem('user'))
    },[])

    const logOut = async()=>{
      // localStorage.removeItem('user');
      await authDispatcher('LOGOUT')
      navigate("/",{replace:true}); 
    }
    
    const handleClickAdd = async ()=>{
      try {
        const docRef = await addDoc(collection(db, "test"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  

    const [btnClick,setClick] = useState(false);



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
      <div className="ui-body-container">
        <div className="ui-body-side-bar">
          <button className="response-button dropdown-button" onClick={handleClickAdd}><FontAwesomeIcon className="plus-icon" icon={faPlus} /> New</button>
          
        </div>
        <div className="ui-body-main-wrapper">
          
        </div>
      </div>
    </>
  )
}

export default Ui;
