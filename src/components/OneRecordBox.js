import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OneRecord from "./OneRecord";
import "../componentsCss/OneRecordBox.css";

function OneRecordBox() {
  const state = useSelector((state) => state.recordReducer);
  const { records } = state;
  const dayCount = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className="oneRecordBox">
      {records[1].map((dayTime, idx) => {
        return <OneRecord dayTime={dayTime} idx={idx} key={idx} dayCount={dayCount} />;
      })}
    </div>
  );
}

export default OneRecordBox;
