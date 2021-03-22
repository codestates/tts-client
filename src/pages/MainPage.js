import React, { useEffect } from "react";

import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";
import Grade from "../components/Grade";
import NowStudyTime from "../components/NowStudyTime";
import "../componentsCss/MainPage.css";
import {useSelector} from 'react-redux'
import GuestNavBar from "../components/GuestNavbar";

function MainPage() {
  const x = useSelector(s=>s.recordReducer.isLogin)

  return (
    <div className="allInBox">
      {x ? (
            <NavBar />
         ) : (
            <GuestNavBar/>
      )}
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
