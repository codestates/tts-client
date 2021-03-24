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
    dispatch(setLogout())
  }

  // 리액트 훅스 사용 네브바 햄버거 토글 활성화 or 비활성화
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
            <Link to='/main'>초시계</Link>
          </li>
          <li>
            <Link to='/mypage'>Mypage</Link>
          </li>
          <li>
            <Link to='/' className="navBarSignup" onClick={logoutHandler}>Logout</Link>
          </li>
        </ul>
        <Link className="navBarHambeger" href="/#" onClick={hambergerHandler}>
          <i className="fas fa-bars"></i>
        </Link>
      </nav>
    </div>
  );
}
export default NavBar;
