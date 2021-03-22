import React, { useEffect } from "react";

import NavBar from "../components/NavBar";
import Clock from "../components/Clock";
import OneRecordBox from "../components/OneRecordBox";
import Grade from "../components/Grade";
import NowStudyTime from "../components/NowStudyTime";
import "../componentsCss/MainPage.css";
// import { useDispatch } from "react-redux";
// import { axiosData, setRecords } from "../actions/recordAction";

function MainPage() {
  //! 로그인 상태에 따라 랜더할지말지 선택할수있게
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const axiosGetRecords = async () => {
  //     await dispatch(axiosData("https://localhost:5000/user/record", setRecords));
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   axiosGetRecords();
  // }, []);

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
