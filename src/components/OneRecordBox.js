import OneRecord from "./OneRecord";
import "../componentsCss/OneRecordBox.css";
import { getNumberOfWeek } from "../functions/getNumberOfWeek";
import React from "react";
import { useSelector } from "react-redux";

function OneRecordBox() {
  const thisWeek = getNumberOfWeek();

  const state = useSelector((state) => state.recordReducer);
  const { records, isLogin } = state;
  const dayCount = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="oneRecordBox">
      {thisWeek in records
        ? records[thisWeek].map((dayTime, idx) => {
            return (
              <OneRecord
                dayTime={dayTime}
                idx={idx}
                key={idx}
                dayCount={dayCount}
              />
            );
          })
        : isLogin
        ? "Start Work!"
        : "Please Login"}
    </div>
  );
}

export default OneRecordBox;
