import OneRecord from "./OneRecord";
import "../componentsCss/OneRecordBox.css";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import React from "react";
import { useSelector } from "react-redux";

function OneRecordBox() {
  const thisWeek = getNumberOfWeek();

  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  console.log("records:", records);
  const dayCount = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className="oneRecordBox">
      {Object.keys(records).length !== 0
        ? records[1].map((dayTime, idx) => {
            return <OneRecord dayTime={dayTime} idx={idx} key={idx} dayCount={dayCount} />;
          })
        : "로딩중입니다"}
    </div>
  );
}

export default OneRecordBox;
