import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { dataBase } from "../../essential/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 


export default function ShowFolder(){

    const [folders, setFolders] = useState([])
   
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



useEffect(()=>{
    run();
},[]);


    return( 
        <>
           {
             Array.isArray(folders) && folders.map((_f,index)=>{
                return <div key={`folders_${index}`}>
                    <p>{_f.name}</p>
                </div>
             })
           } 
        </>
    )
}