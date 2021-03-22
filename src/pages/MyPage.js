import React from "react";
import NavBar from "../components/NavBar";
import {useSelector} from 'react-redux'
import GuestNavBar from "../components/GuestNavbar";



function MyPage() {
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

export default MyPage;
