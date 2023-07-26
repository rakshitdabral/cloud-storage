import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../ui/ui.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowUp} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../context/AuthContext";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../essential/firebase-config";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { dataBase } from "../../essential/firebase-config";
import { Timestamp, onSnapshot } from "firebase/firestore";

export default function UploadFile() {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [fileSelect,setFile] = useState(null);

    const currentFolder =  sessionStorage.getItem("folderId")

    
    const handleClickAdd = async ()=>{
      
      if(fileSelect==null && currentFolder==null) return;
      
      if(currentFolder!=null){
        const storageRef = ref(storage,`${currentFolder}/`+fileSelect.name+uuidv4());
        const  uploadTask =   uploadBytesResumable(storageRef,fileSelect );
        await uploadTask.on('state_changed',(snapshot)=>{},
        ()=>{},()=>{
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const docRef =  addDoc(collection(dataBase, "files"),{
              url:downloadURL,
              name:fileSelect.name,
              // createdAt: Timestamp(),
              folderId: currentFolder,
              userId: localStorage.getItem("uId")
            })
            console.log("success")
          });
        })
      }
      else{
        const storageRef = ref(storage,"root/"+fileSelect.name+uuidv4());
        const  uploadTask =  uploadBytesResumable(storageRef,fileSelect );
        await uploadTask.on('state_changed',(snapshot)=>{},
        ()=>{},()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const docRef = addDoc(collection(dataBase, "files"),{
              url:downloadURL,
              name:fileSelect.name, 
              // createdAt: Timestamp(),
              folderId: currentFolder,
              userId: localStorage.getItem("uId")
            })
            console.log("success")
          });
        })
      }
      handleClose()
    }

    
  

  return(
        <>
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
        </>
    )
}