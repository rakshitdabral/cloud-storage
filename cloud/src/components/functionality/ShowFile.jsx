import React from "react";
import { collection, onSnapshot} from "firebase/firestore";
import { useState,useEffect } from "react";
import { dataBase } from "../../essential/firebase-config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile} from "@fortawesome/free-solid-svg-icons"

export default function ShowFile() {

  const [files, setFiles] = useState([])
  const collectionRef = collection(dataBase,'files')


  const fileShow = async () => {
    // const querySnapshot = await getDocs(collection(dataBase, "folders"));
    // console.log(querySnapshot.docs)
    // let foldersFetched = []
    await onSnapshot(collectionRef,(data)=>{
        setFiles(data.docs.map((doc)=>{
        // if(doc.folderId === sessionStorage.getItem("folderId")){
          
        // }
        //    return null;
        return({...doc.data(),id: doc.id})
        }))

        
    })
  }
  
  useEffect(()=>{
    fileShow();
},[]);
    

    
  return <>
      <div className="parent-body">
        { 
             Array.isArray(files) && files.map((_f,index)=>{
              if(_f.folderId === sessionStorage.getItem("folderId") && localStorage.getItem("uId")===_f.userId){
                return <div className="child-body " key={`files_${index}`}>
                    <a  href={_f.url} target="_blank" rel="noreferrer" className="btn  folders files truncate"><FontAwesomeIcon icon={faFile} size="xl" style={{color: "#575757",}} /> <span><span></span></span>{_f.name}</a>
                </div>
              } 
                return null
             })
           } 
        </div>
  </>;
}

