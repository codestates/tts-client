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
          <a href="/welcome">tts</a>
        </div>
        <ul className={`navBarMenu ${active ? "active" : ""}`}>
          <li>
          <Link to='/main'>초시계</Link>
          </li>
          <li>
            <Link to='/' >로그인</Link>
          </li>
          <li>
            <Link className='navBarSignup' onClick={ModalHandler}>회원가입</Link>
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
