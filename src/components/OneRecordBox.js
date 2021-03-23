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
      {thisWeek in records
        ? records[thisWeek].map((dayTime, idx) => {
            return <OneRecord dayTime={dayTime} idx={idx} key={idx} dayCount={dayCount} />;
          })
        : "데이터가 없습니다"}
    </div>
  );
}

export default OneRecordBox;
