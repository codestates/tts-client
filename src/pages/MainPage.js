import React from "react";
import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";
import { useSelector } from "react-redux";

function MainPage() {
  const state = useSelector((state) => state.recordReducer);
  return (
    <div>
      MainPage 서버로 요청 보내자 초! : {state.records.record}
      <NavBar />
      <Clock />
      <OneRecordBox />
    </div>
  );
}
export default MainPage;
