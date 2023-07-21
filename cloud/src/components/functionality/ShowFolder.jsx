import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { dataBase } from "../../essential/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function ShowFolder(){




    const run = async () => {
    const querySnapshot = await getDocs(collection(dataBase, ));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })};

    return( 
        <>
           <button onClick={run}>Check</button>
        </>
    )
}