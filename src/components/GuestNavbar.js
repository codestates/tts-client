import "../componentsCss/NavBar.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ModalPage from '../pages/ModalPage'

function NavBar() {
  const [active, setActive] = useState(false);
  const [showModal,setShowModal] = useState(false);

  const ModalHandler=()=>{
    setShowModal(!showModal)
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
            <Link to='/' >Login</Link>
          </li>
          <li>
            <Link className='navBarSignup' onClick={()=>{
              hambergerHandler()
              ModalHandler()
            }} >Sign Up</Link>
          </li>
        </ul>
        <Link className="navBarHambeger" href="/#" onClick={hambergerHandler}>
          <i className="fas fa-bars"></i>
        </Link>
      </nav>
      <ModalPage showModal={showModal} setShowModal={setShowModal}></ModalPage>
    </div>
  );
}
export default NavBar;
