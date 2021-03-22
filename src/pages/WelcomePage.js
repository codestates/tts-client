// import React,{useState,useEffect} from "react";
import NavBar from "../components/NavBar";
import GuestNavBar from "../components/GuestNavbar";
import {useSelector} from 'react-redux'
// import axios from 'axios'
function WelcomePage(props) {

  const x = useSelector(s=>s.userReducer.isLogin)

  return (
    <div>
       {x ? (
            <NavBar />
         ) : (
            <GuestNavBar/>
            )}
    </div>
  );
}
export default WelcomePage;
