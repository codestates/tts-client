import "../componentsCss/NavBar.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  const [active, setActive] = useState(false);

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
            <Link to='/' className='navBarSignup'>회원가입</Link>
          </li>
        </ul>
        <a className="navBarHambeger" href="/#" onClick={hambergerHandler}>
          {" "}
          <i className="fas fa-bars"></i>
        </a>
      </nav>
    </div>
  );
}
export default NavBar;
