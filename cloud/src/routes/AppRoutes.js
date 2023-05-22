import React,{useEffect, useState} from 'react'
import {Route, Routes} from "react-router-dom";

import Ui from '../components/ui/Ui'
import Home from '../components/home/Home'
import Prices from "../components/prices/Prices"
import GetStarted from "../components/getstarted/GetStarted";
import Protected from '../components/protected/Protected';

export default function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() =>{
    let isTokenPresent = localStorage.getItem('user')
    setIsLoggedIn(isTokenPresent)
  }, [])
  return (
    <>
        <Routes>
          {
            isLoggedIn ? <>
              <Route exact path="/cloudo/my-cloud" element={<Ui/>} />
            </> : 
            <>
              <Route exact path="/getstarted" element={<GetStarted/>} />
            </>
          }
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/prices" element={<Prices/>}  />
        </Routes>
    </>
  )
}
