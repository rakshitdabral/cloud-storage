import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { dataBase } from "../../essential/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolder} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
 


export default function ShowFolder(){

    const [folders, setFolders] = useState([])
    const navigate = useNavigate()
    const collectionRef = collection(dataBase,'folders')

    const run = async () => {
        // const querySnapshot = await getDocs(collection(dataBase, "folders"));
        // console.log(querySnapshot.docs)
        // let foldersFetched = []
        await onSnapshot(collectionRef,(data)=>{
            setFolders(data.docs.map((doc)=>{
                return({...doc.data(),id: doc.id})
            }))

            
        })
        
        
        // setFolders([...folders, ...foldersFetched]);
        
    };

    const openFolder = (id)=>{
        sessionStorage.setItem("folderId",id)
        navigate(`/folder/${id}`)
    }

useEffect(()=>{
    run();
},[]);


    return( 
        <>
        <div className="parent-body">
        {
             Array.isArray(folders) && folders.map((_f,index)=>{
                return <div className="child-body " key={`folders_${index}`}>
                    <button className="btn  folders truncate" onClick={()=>openFolder(_f.id)}><FontAwesomeIcon icon={faFolder} size="xl" style={{color: "#575757",}} /> <span><span></span></span>{_f.name}</button>
                </div>
             })
           } 
        </div>
           
        </>
    )
}