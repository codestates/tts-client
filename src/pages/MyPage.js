import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import GuestNavBar from "../components/GuestNavbar";
import UserInfo from "../components/UserInfo";

function MyPage() {
  const x = useSelector((s) => s.recordReducer.isLogin);

  return (
    <div>
      <div>{x ? <NavBar /> : <GuestNavBar />}</div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
}

export default MyPage;
