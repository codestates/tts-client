import React from "react";
import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Clock />
      <OneRecordBox />
    </div>
  );
}
export default MainPage;
