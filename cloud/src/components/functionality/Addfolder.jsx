import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { dataBase } from "../../essential/firebase-config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import { collection , addDoc , serverTimestamp} from "firebase/firestore";





export default function AddFolder(){

  
    const [folderName, setFolderName] = useState("");
    
    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);


    const handleShow = () => setShow(true);
    
    

    const handleClick = async ()=>{
      try {
        const docRef = await addDoc(collection(dataBase, "folders"), {
          name: folderName,
          uid: localStorage.getItem("uId"),
          created: serverTimestamp(),
          type : 'folder',
           
        })
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
        handleClose()
    }


    return(
       <>
        <Button className="response-button"  onClick={handleShow}><FontAwesomeIcon icon={faFolderPlus} size="xl" centered style={{color: "#141415",}} /></Button>
          <Modal className="modal-change" show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal"><input type="text" required id="folderName" name="folderName" multiple onChange={(event)=>{
          setFolderName(event.target.value)
        }}></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
       </>      
    )
}

