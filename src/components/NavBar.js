import "../componentsCss/NavBar.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {setLogout} from '../actions/userAction'
import {useDispatch} from "react-redux";
import axios from 'axios'



function NavBar() {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false);

  const logoutHandler=()=>{
    axios.get('https://localhost:5000/user/logout',{accept:'application/json',withCredentials:true}).then(res=>res.data)
    .then(e => {
      dispatch(setLogout())
    })
  }
  const hambergerHandler = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  

  return (
    <div>
      <nav className="navBar">
        <div className="navBarLogo">
          <Link to="/welcome">tts</Link>
        </div>
        <ul className={`navBarMenu ${active ? "active" : ""}`}>
          <li>
          <Link to='/welcome'>Home</Link>
          </li>
          <li>
            <Link to='/main'>Record</Link>
          </li>
          <li>
            <Link to='/follow'>Follow</Link>
          </li>
          <li>
            <Link to='/mypage'>Mypage</Link>
          </li>
          <li>
            <Link to='/' className="navBarSignup" onClick={logoutHandler}>Logout</Link>
          </li>
        </ul>
        <Link className="navBarHambeger" to='#' onClick={hambergerHandler}>
          <i className="fas fa-bars"></i>
        </Link>
      </nav>
    </div>
  );
}
export default NavBar;
