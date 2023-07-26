import React,{useLayoutEffect, useState} from 'react'
import {Route, Routes} from "react-router-dom";
import Ui from '../components/ui/Ui'
import { dataBase } from '../essential/firebase-config';
import Home from '../components/home/Home'
import Prices from "../components/prices/Prices"
import GetStarted from "../components/getstarted/GetStarted";
import {AuthContext} from '../context/AuthContext';
import Folder from '../components/folder/Folder';




export default function AppRoutes() {
  const [userAuth, setUserAuth] = useState({'userId': '', 'email':'', 'name':'', 'profilePic':'','isLoggedIn': false});
  // const navigate = useNavigate();
  useLayoutEffect(() =>{
    let user = localStorage.getItem('user')
    if(user){
      setUserAuth({...JSON.parse(localStorage.getItem('user')),'isLoggedIn':true});
    }else{
      localStorage.removeItem('user');
    }
  }, []);
  
  const authDispatcher = (actionType, actionPayload) => {
    switch(actionType) {
      case 'LOGIN':{
        const { userId, email, name, profilePic  } = actionPayload;
        setUserAuth({'userId': userId, 'email': email, 'name': name, 'profilePic':profilePic,'isLoggedIn': true});
        break;
      }

      case 'LOGOUT':{
        setUserAuth({'userId': '', 'email': '', 'name': '', 'profilePic':'','isLoggedIn': false});
        localStorage.removeItem('user')
        break;
      }

      default:{
        setUserAuth({'userId': '', 'isLoggedIn': false});
      }
    }
  }
  
  return (
    <AuthContext.Provider value={{userAuth, authDispatcher}}>
        <Routes>
        {
          userAuth.isLoggedIn? 
            <>
            
              

              

              if(sessionStorage.getItem('folderId')==="null"){
                <Route path="*" element={<Ui database={dataBase}/>} />
              }else{
                <Route path="/folder/:id" element={<Folder/>} />
              }
              {/* <Route exact path="*" element={<Ui/>} /> */}
            </>
          :
            <>
              <Route exact path="/getStarted" element={<GetStarted/>}/>
              <Route exact path="/" element={<Home/>}  />
              <Route exact path="/prices" element={<Prices/>}  />
              <Route  path="*" element={<Home/>} />
              
            </>
        }
        </Routes>
    </AuthContext.Provider>
  )
}
