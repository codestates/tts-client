import React from "react";
import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";
import Grade from "../components/Grade";
import NowStudyTime from "../components/NowStudyTime";
import "../componentsCss/MainPage.css";

function MainPage() {
  return (
    <div className="allInBox">
      <NavBar />
      <div className="exceptNavBar">
        <div className="mainPageASide">
          <Grade className="grade" />
          <Clock />
        </div>
        <div className="mainPageBSide">
          <NowStudyTime className="nowStudyTime" />
          <OneRecordBox className="oneRecordBox" />
        </div>
      </div>
    </div>
  );
}
export default MainPage;
