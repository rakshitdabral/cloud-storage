import React, { useState, useLayoutEffect,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ui.css";
import { useNavigate} from "react-router-dom";
import AddFolder from "../functionality/Addfolder";
import ShowFolder from "../functionality/ShowFolder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCircleQuestion,faCircleUser,faGear, faListUl ,faSliders,faFileArrowUp} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../context/AuthContext";
import {  ref, uploadBytes, uploadBytesResumable, } from "firebase/storage";
import { storage } from "../../essential/firebase-config";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';

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
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     
    const [fileSelect,setFile] = useState(null);

    

    const handleClickAdd = async ()=>{
      const metaData={
        uid:localStorage.getItem('uId'),
        contentType: fileSelect.contentType
      }
      
      try {
        if(fileSelect==null) return;
        
        const storageRef = ref(storage,`${AddFolder.folderName}/`+fileSelect.name+uuidv4());
        uploadBytesResumable(storageRef,fileSelect,metaData ).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      handleClose()
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
      <div className="ui-body-container">
        <div className="ui-body-side-bar">
        <div>
      <AddFolder/>
      </div>
      <div>
          <button className="response-button dropdown-button" onClick={handleShow}><FontAwesomeIcon icon={faFileArrowUp} size="xl" centered /></button>
          <Modal className="modal-change" show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal"><input type="file" id="myfile" name="myfile" multiple onChange={(event)=>{
          setFile(event.target.files[0])
        }}></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClickAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>
        <div className="ui-body-main-wrapper" id="display">
            <ShowFolder/>
        </div>
      </div>
    </>
  )
}

export default Ui;
