import React, { useEffect } from "react";

import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";
import Grade from "../components/Grade";
import NowStudyTime from "../components/NowStudyTime";
import "../componentsCss/MainPage.css";

import GuestNavBar from "../components/GuestNavbar";
import { useSelector, useDispatch } from "react-redux";
import { axiosData, setRecords } from "../actions/recordAction";

function MainPage() {
  const x = useSelector((s) => s.userReducer.isLogin);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(axiosData("https://localhost:5000/user/record", setRecords));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="allInBox">
      {x ? <NavBar /> : <GuestNavBar />}
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
