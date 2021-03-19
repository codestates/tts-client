import React from "react";
import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";
import Grade from "../components/Grade";
import "../componentsCss/MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="allInBox">
        <NavBar />
        <Grade />
        <Clock />
        <OneRecordBox />
      </div>
    </div>
  );
}
export default MainPage;
