import "../componentsCss/NavBar.css";
import React, { useState } from "react";

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
          <a href="/">tts</a>
        </div>
        <ul className={`navBarMenu ${active ? "active" : ""}`}>
          <li>
            <a href="/main">초시계</a>
          </li>
          <li>
            <a href="/mypage">마이페이지</a>
          </li>
          <li>
            <a href="/" className="navBarLogin">
              로그인
            </a>
          </li>
          <li>
            <a href="/" className="navBarSignup">
              회원가입
            </a>
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
