import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import GuestNavBar from "../components/GuestNavbar";
import UserInfo from "../components/UserInfo";
import WeeklyRecordBox from "../components/WeeklyRecordBox";
import "../componentsCss/MyPage.css";
function MyPage() {
  const x = useSelector((s) => s.recordReducer.isLogin);
  return (
    <div>
      <div>{x ? <NavBar /> : <GuestNavBar />}</div>
      <div className="myPage">
        <UserInfo />
        <WeeklyRecordBox />
      </div>
    </div>
  );
}

export default MyPage;
